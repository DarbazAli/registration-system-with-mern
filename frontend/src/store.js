import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers'

const reducers = combineReducers({
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,

  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
