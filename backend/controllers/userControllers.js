import User from '../models/userModel.js'
import { errorHandler } from '../lib/errorMiddleware.js'
// create new user
const create = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    return res.status(201).json({
      message: 'Successfully signed up!',
    })
  } catch (error) {
    return res.status(400).json({
      error: errorHandler(error),
    })
  }
}

export default { create }
