import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Forget from './components/Forget'

function App() {
  
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/forget' element={<Forget/>} />
          </Routes>
        </BrowserRouter>
      
      
    
    </>
  )
}

export default App
