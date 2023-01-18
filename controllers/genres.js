import { Song } from "../models/song.js"
import { Profile } from "../models/profile.js"


function index(req, res) {
  console.log('Query obj:', req.query)
  Song.find(req.query)
  .then(songs => {
    console.log('Filtered songs', songs)
    console.log('QUERY OBJECTTTTTT:', req.query)
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
  .then(song => {
    res.render('genres/show', {
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