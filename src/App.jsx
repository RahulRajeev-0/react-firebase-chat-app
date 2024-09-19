import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseHome from './Pages/BaseHome'
import { Routes, Route } from 'react-router-dom'
import Auth from './Pages/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<BaseHome/>}/>
      <Route path='/auth' element={<Auth/>}/>
     
      
    </Routes>
    </>
  )
}

export default App
