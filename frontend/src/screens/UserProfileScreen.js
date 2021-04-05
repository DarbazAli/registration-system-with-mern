import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'

import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { updateUserProfile, getUserDetails } from '../actions/userActions'

const UserProfileScreen = ({ history, match }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const { user, error, loading } = useSelector((state) => state.userDetails)

  const { loading: loadingUpdate, success, error: errorUpdate } = useSelector(
    (state) => state.userUpdate
  )

  useEffect(() => {
    if (!userInfo) {
      history.push('/login?redirect=/profile')
      return
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, userInfo, dispatch, user, success, userId])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile(name, email, password))
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {message && <Message variant='danger'>{message}</Message>}
      {success && <Message variant='success'>User updated</Message>}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {loadingUpdate && <Loader />}
      {user && (
        <>
          <p>
            <strong>Name: </strong>
            {user && user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user && user.email}
          </p>
        </>
      )}
      <FormContainer>
        <h1>Edit Profile</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassowrd'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit'>Update</Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default UserProfileScreen
