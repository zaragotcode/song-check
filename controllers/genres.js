import { Song } from "../models/song.js"
import { Profile } from "../models/profile.js"


function index(req, res) {
  Song.find({})
  .then(songs => {
    res.render('genres/index', {
      songs,
      title: 'Choose a genre!',
  })
})
.catch(error => {
  // handle errors
  console.log(error)
  res.redirect('/genres')
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


export {
  index,
  show
}