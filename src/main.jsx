import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './Body'
import { Footer } from './Footer'
import { Navbar } from './Navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>,
)
