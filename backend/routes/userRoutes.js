import express from 'express'
import userCtrl from '../controllers/userControllers.js'
import protect from '../lib/authMiddleware.js'
const router = express.Router()

router.route('/').post(userCtrl.create).get(userCtrl.list)
router.route('/profile').get(protect, userCtrl.getUserProfile)

router
  .route('/:id')
  .get(protect, userCtrl.read)
  .put(protect, userCtrl.update)
  .delete(protect, userCtrl.remove)

router.post('/login', userCtrl.authUser)

router.param('id', userCtrl.userByID)

export default router
