import { Router } from 'express'
import * as aboutCtrl from '../controllers/about.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/songs
router.get('/', aboutCtrl.index)

export {
  router
}