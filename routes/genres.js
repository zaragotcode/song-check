import { Router } from 'express'
import * as genresCtrl from '../controllers/genres.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/users
router.get('/', genresCtrl.index)


export {
  router
}