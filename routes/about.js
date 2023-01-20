import { Router } from 'express'
import * as aboutCtrl from '../controllers/about.js'
import { isLoggedIn } from '../middleware/middleware.js'


// GET localhost:3000/
router.get('/', genresCtrl.index)


export {
  router
}