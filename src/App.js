import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './Page/Add'
import Navbar from './Componentt/Navbar'
import PhoneHome from './Page/PhoneHome'
import SingleContact from './Page/SingleContact'
import Edit from './Page/Edit'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PhoneHome />} />
          <Route path='add' element={<Add />} />
          <Route path='contact/:id/:name/:contact/:back' element={<SingleContact />} >
            <Route path='edit' element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


