import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Company from './pages/Company'
import ContactUs from './pages/ContactUs'
import Technology from './pages/Technology'
import Career from './pages/Career'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App