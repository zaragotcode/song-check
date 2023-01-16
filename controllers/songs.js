import { Song } from "../models/song.js"

function index(req, res) {
  Song.find({})
  .then(songs => {
    res.render('songs/index', {
      songs,
      title: 'All Songs',
  })
})
.catch(error => {
  // handle errors
  console.log(error)
  res.redirect('/songs')
})
}

function newSong(req, res) {
  res.render("songs/new", {
    title: "Add New Song"
  })
}

function show(req, res) {
  Song.findById(req.params.id)
  .populate('owner')
  .then(song => {
    res.render('songs/show', {
      song,
      title: 'Song Details'
    })
  })
  .catch(error => {
    // handle errors
    console.log(error)
    res.redirect('/')
  })
  .catch(error => {
    // handle errors
    console.log(error)
    res.redirect('/')
  })
}

function create(req,res){
  req.body.owner = req.user.profile
  req.body.explicitRating = !!req.body.explicitRating
  for (const key in req.body) {
    // Key can be "title", "releaseYear", etc.
    if(req.body[key] === "") delete req.body[key]
    //req.body.releaseYear is "" so we delete it
  }
  Song.create(req.body)
  .then(song => {
    res.redirect('/songs')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/songs')
  })
}

function edit(req, res) {
  Song.findById(req.params.id)
  .then(song => {
    res.render('songs/edit', {
      song,
      title: "Edit 🎵"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

export {
  index,
  newSong as new,
  show,
  create,
  edit
}