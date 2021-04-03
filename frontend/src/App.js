import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import UserListScreen from './screens/UserListScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/users' component={UserListScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
