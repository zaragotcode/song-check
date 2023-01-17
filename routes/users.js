import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/users
router.get('/', usersCtrl.indexUsers)

// GET localhost:3000/songs/:id
router.get('/:id', usersCtrl.showUsers)


export {
  router
}