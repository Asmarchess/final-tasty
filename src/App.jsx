import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { Admin } from './pages/Admin'
import Add from './pages/Add'
import { Favorit } from './pages/Favorit'
import Edit from './pages/Edit'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/Add' element={<Add />} />
        <Route path='/Edit/:id' element={<Edit />} />
        <Route path='/Favorit' element={<Favorit />} />
        </Route>
       
      </Routes>
    </>
  )
}

export default App
