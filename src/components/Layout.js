import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'

export const Layout = () => {
  return (
      <div style={{
        width: '100%',
        maxWidth: '70rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '0 2rem',
        background: 'rgb(250, 250, 250)',
      }}>
          <Header />
          <Outlet/>
    </div>
  )
}
