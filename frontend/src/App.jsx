import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Navbar from './components/myui/Navbar'
import Footer from './components/myui/Footer'
import Shop from './pages/Shop'
import TshirtDetail from './pages/TshirtDetail'
import Cart from './pages/Cart'
import DesignTshirt from './pages/DesignTshirt'
import { AppProvider } from './AppContext'
import ContactUs from './pages/ContactUs'

const App = () => {

  const [typeTshirt, setTypeTshirt] = useState('');

  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Navbar typeTshirt={typeTshirt} setTypeTshirt={setTypeTshirt} />
          <Routes>
            <Route path='/' element={<Home typeTshirt={typeTshirt} setTypeTshirt={setTypeTshirt} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop/:id' element={<TshirtDetail />} />
            <Route path='/design-your-tshirt' element={<DesignTshirt />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App