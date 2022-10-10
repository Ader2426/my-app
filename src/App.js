import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Slider from './components/Slider' 


const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Hero />
      <Slider />
      
    </div>
  )
}

export default App