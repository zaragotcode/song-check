import { Router } from 'express'
import * as genresCtrl from '../controllers/genres.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/users
router.get('/', genresCtrl.index)

// GET localhost:3000/songs/:id
router.get('/:id', genresCtrl.show)

export {
  router
}