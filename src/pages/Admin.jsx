import React from 'react'
import MonthChart from "./pages/Chart"
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar'

const Admin = () => {
  return (
    <div>
    <NavBar/>
    <MonthChart/>
    <Footer/>
    </div>
  )
}

export default Admin
