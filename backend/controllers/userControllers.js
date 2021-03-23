import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { errorHandler } from '../lib/errorMiddleware.js'

/*================================================================
CREATE NEW SUER
@desc   Create new user
@route  POST /api/users
@access Public
================================================================*/
const create = asyncHandler(async (req, res) => {
  const user = new User(req.body)

  const savedUser = await user.save()
  if (savedUser) {
    return res.status(201).json({
      message: 'Successfully signed up!',
    })
  } else {
    res.status(401)
    throw new Error('Invalid user data')
  }
})

/*================================================================
LIST ALL USERS
@desc   List all users
@route  GET /api/users
@access Public
================================================================*/
const list = asyncHandler(async (req, res) => {
  const users = await User.find({})
  if (users) return res.status(200).json(users)
  else {
    res.status(401)
    throw new Error('No users found')
  }
})

export default { create, list }
