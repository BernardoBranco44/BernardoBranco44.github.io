import './App.css'
import React, { useContext, useRef, useEffect } from "react";
import Navbar from "./components/Navbar"
import Contact from "./components/Contact";
import Home from "./components/Home";
import Materialised from "./components/projects/Materialised";
import Youtube from "./components/projects/Youtube";
import Spotify from "./components/projects/Spotify";
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
          <Route path='/projects/youtubeClone' element={<Youtube />}/>
          <Route path='/projects/spotify' element={<Spotify />}/>
        </Routes>
        <footer ref={contactRef} className="footer-container">
          <Contact />
        </footer>
      </div>
    </NavigationContext.Provider>
  )
}

export default App
