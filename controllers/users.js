import { Profile } from "../models/profile.js"
import { Song } from "../models/song.js"

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

function showUsers(req, res) {
  Profile.findById(req.params.id)
  .populate('playlist')
  .then(profile => {
    res.render('users/profile', {
      profile,
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

export {
  indexUsers,
  showUsers
}