import './App.css'
import React, { useContext, useRef } from "react";
import Navbar from "./components/Navbar"
import Contact from "./components/Contact";
import Home from "./components/Home";
import Materialised from "./components/projects/Materialised";
import Ecommerce from "./components/projects/Ecommerce";
import Quiz from "./components/projects/Quiz";
import Tenzies from "./components/projects/Tenzies";
import { Route, Routes, useNavigate } from "react-router-dom";

export const NavigationContext = React.createContext()

function App() {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const navigate = useNavigate()

  function Navigation() {
    navigate("/")
  }

  function ExecuteScroll(ref) {
    Navigation()
    setTimeout(() => {
      ref.current.scrollIntoView()
    }, 10);
  }

  return (
    <NavigationContext.Provider value={{projectsRef, aboutRef, contactRef, ExecuteScroll}}>
      <div className='app'>
        <nav className='sticky-top'>
          <Navbar />
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects/materialised' element={<Materialised />}/>
          <Route path='/projects/ecommerce' element={<Ecommerce />}/>
          <Route path='/projects/quiz' element={<Quiz />}/>
          <Route path='/projects/tenzies' element={<Tenzies />}/>
        </Routes>
        <footer ref={contactRef} className="footer-container">
          <Contact />
        </footer>
      </div>
    </NavigationContext.Provider>
  )
}

export default App
