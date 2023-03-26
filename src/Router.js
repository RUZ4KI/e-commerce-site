import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Cart } from './pages/Cart'
import Home from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProductDetailsPage } from './pages/ProductDetailsPage'

export const Router = () => {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<ProductDetailsPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/*' element={<NotFound/>}/>
          </Route>
      </Routes>
  )
}
