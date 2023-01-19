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
  Song.find(req.query)
  .then(songs => {
    console.log(songs);
    res.render('genres/show', {
      songs,
      title: songs[0].genre ,
    })
  })
  .catch(error => {
    // handle errors
    console.log(error)
    res.redirect('/genres')
  })
}


export {
  index,
  show
}