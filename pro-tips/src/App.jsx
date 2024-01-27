import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
