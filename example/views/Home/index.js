import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>
        Examples
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login Component</Link>
        </li>
        <li>
          <Link to='/signup'>Signup Component</Link>
        </li>
        <li>
          <Link to='/forgot_password'>Forgot password</Link>
        </li>
        <li>
          <Link to='/facebook_login'>Facebook login</Link>
        </li>
        <li>
          <Link to='/session_manager'>Session manager</Link>
        </li>
        <li>
          <Link to='/profile'>User profile</Link>
        </li>
        <li>
          <Link to='/order_context'>Order context and order type control</Link>
        </li>
        <li>
          <Link to='/active_orders'>Active orders</Link>
        </li>
      </ul>
    </>
  )
}
