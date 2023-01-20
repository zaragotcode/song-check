import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/profiles
router.get('/', profilesCtrl.index)

// GET localhost:3000/profiles/:id
router.get('/:id', profilesCtrl.show)

// GET localhost:3000/profiles/:id/edit
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit)

// PUT localhost:3000/profiles/:id
router.put('/:id', isLoggedIn, profilesCtrl.update)


export {
  router
}