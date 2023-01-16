import { Router } from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/songs
router.get('/', songsCtrl.index)

export {
  router
}