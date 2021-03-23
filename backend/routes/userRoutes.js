import express from 'express'
import userCtrl from '../controllers/userControllers.js'
const router = express.Router()

router.route('/').post(userCtrl.create)

// router
//   .route('/:id')
//   .get(userCtrl.read)
//   .put(userCtrl.update)
//   .delete(userCtrl.remove)

export default router
