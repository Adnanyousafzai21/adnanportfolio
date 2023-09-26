import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from './components/Herosection'
import Header from './components/Header'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './pages/About'
import Work from './pages/Work'
import Resume from './pages/resume'
import Contact from './pages/contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <div className="heromain"></div>
<Routes>
  <Route path='/' element={<About/>}/>
  <Route path="/pages/work" element={<Work/>}/>
  <Route path="/pages/resume" element={<Resume/>}/>
  <Route path="/pages/contact" element={<Contact/>}/>
</Routes>
 </BrowserRouter>
    </>
  )
}

export default App
