import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const UserProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const { user, error, loading } = useSelector((state) => state.userDetails)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login?redirect=/profile')
    } else {
      dispatch(getUserDetails())
    }
  }, [history, userInfo, dispatch])

  return (
    <div>
      <h1>Profile</h1>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {userInfo && (
        <>
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        </>
      )}
    </div>
  )
}

export default UserProfileScreen
