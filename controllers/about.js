import { Song } from "../models/song.js"


function index(req, res) {
  console.log('TESTTTTTT');
    res.render('about', {
      title: 'What Is Song Check?',
    })
}

export {
  index
}