import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginScreen from './LoginScreen'

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <>
      <h1>Welcome to MERN Registration System</h1>
      {!userInfo && <h3>Please login to have unrestricted access</h3>}
      {!userInfo && (
        <Route
          render={({ location, history }) => (
            <LoginScreen history={history} location={location} />
          )}
        />
      )}
    </>
  )
}

export default HomeScreen
