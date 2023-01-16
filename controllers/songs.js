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

export {
  index,
  newSong as new
}