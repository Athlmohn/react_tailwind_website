import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import FoodMenu from './components/FoodMenu/FoodMenu'
import Category from './components/Category/Category'
import Footer from './components/Footer/Footer'


function  App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Menu/>
      <FoodMenu/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default App

