import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import homeimg from './assets/space.jpg';

function App() {

  return (
    <>
      
      <h1>Welcome to the Crew!</h1>
      <p>Create new crew members and see who else is on the team.</p>
      <img className='homeImage' src={homeimg}></img>
    </>
  )
}

export default App
