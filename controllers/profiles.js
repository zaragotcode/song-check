import { Profile } from "../models/profile.js"
import { Song } from "../models/song.js"

function index(req, res) {
  console.log("THIS IS MY REQ.QUERY", req.query);
  Profile.find(req.query)
  .then(profiles => {
    res.render('profiles/index', {
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

function show(req, res) {
  req.body.gaAlumni = !!req.body.gaAlumni
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/show', {
      profile,
      title: 'Profile Details'
    })
  })
  .catch(error => {
    // handle errors
    console.log(error)
    res.redirect('/')
  })
}


function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: "Edit User"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function update(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    req.body.gaAlumni = !!req.body.gaAlumni
    profile.updateOne(req.body)
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
  edit,
  update
}