import { Song } from "../models/song.js"
import { Profile } from "../models/profile.js"


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
}

function create(req,res){
  req.body.owner = req.user.profile
  req.body.explicitRating = !!req.body.explicitRating
  // for (const key in req.body) {
  //   // Key can be "title", "releaseYear", etc.
  //   if(req.body[key] === "") delete req.body[key]
  //   //req.body.releaseYear is "" so we delete it
  // }
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
    res.redirect('/songs')
  })
}

function update(req, res) {
  Song.findById(req.params.id)
  .then(song => {
    req.body.explicitRating = !!req.body.explicitRating
    song.updateOne(req.body)
    .then(() => {
      res.redirect(`/songs/${song._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/songs')
  })
}

function createReview(req, res) {
  Song.findById(req.params.id)
  .then(song => {
    song.reviews.push(req.body)
    song.save()
    .then(() => {
      res.redirect(`/songs/${song._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function indexUsers(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('users/index', {
      profiles,
      title: 'All Users',
  })
})
.catch(error => {
  // handle errors
  console.log(error)
  res.redirect('/songs')
})
}

export {
  index,
  newSong as new,
  show,
  create,
  edit,
  update,
  createReview,
  indexUsers
}