import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Data from './pages/Data'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/data' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App