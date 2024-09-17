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
import { SnackbarProvider } from 'notistack'
import Profile from './pages/Profile'
import About from './pages/About'
import RefundPolicy from './pages/RefundPolicy'
import TermsAndCondition from './pages/TermsAndCondition'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import Faq from './pages/Faq'
import SizeGuide from './pages/SizeGuide'
import Review from './pages/Review'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'

const App = () => {

  const [typeTshirt, setTypeTshirt] = useState('');

  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
        <BrowserRouter>
          <AppProvider>
            <Navbar typeTshirt={typeTshirt} setTypeTshirt={setTypeTshirt} />
            <Routes>
              <Route path='/' element={<Home typeTshirt={typeTshirt} setTypeTshirt={setTypeTshirt} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shop' element={<TshirtDetail />} />
              <Route path='/design-your-tshirt' element={<DesignTshirt />} />
              <Route path='/user-profile' element={<Profile />} />
              <Route path='/forget-password' element={<ForgetPassword />} />
              <Route path='/reset-password/:userId' element={<ResetPassword />} />


              {/* footer routes */}
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/review' element={<Review />} />
              <Route path='/refund-policy' element={<RefundPolicy />} />
              <Route path='/term-and-conditions' element={<TermsAndCondition />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/shipping-policy' element={<ShippingPolicy />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/size-guide' element={<SizeGuide />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App