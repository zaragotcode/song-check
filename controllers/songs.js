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

export {
  index
}