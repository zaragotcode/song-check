import { Router } from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/songs
router.get('/', songsCtrl.index)

// GET localhost:3000/songs/new
router.get('/new', isLoggedIn, songsCtrl.new)

// GET localhost:3000/songs/:id
router.get('/:id', songsCtrl.show)

// GET localhost:3000/songs/:id/edit
router.get('/:id/edit', isLoggedIn, songsCtrl.edit)

// DELETE localhost:3000/songId/reviews/:reviewId
router.delete('/:songId/reviews/:reviewId', isLoggedIn, songsCtrl.delete)

// POST localhost:3000/songs
router.post("/", songsCtrl.create)

// POST localhost:3000/movies
router.post("/:id/reviews", songsCtrl.createReview)

// PUT localhost:3000/songs/:id
router.put('/:id', isLoggedIn, songsCtrl.update)

export {
  router
}