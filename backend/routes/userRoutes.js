import express from 'express'
import userCtrl from '../controllers/userControllers.js'
const router = express.Router()

router.route('/').post(userCtrl.create).get(userCtrl.list)

// router
//   .route('/:id')
//   .get(userCtrl.read)
//   .put(userCtrl.update)
//   .delete(userCtrl.remove)

export default router
