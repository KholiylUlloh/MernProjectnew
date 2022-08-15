import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signUp'

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Root