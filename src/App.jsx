
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home';
import Header from "./comp/Header/Header"
import Footer from "./comp/footer/Footer"
import Popup from './comp/popup/Popup';
import { useEffect, useState } from 'react';
import About from './pages/about/About';

function App() {

    const [isOpen, setIsOpen] = useState(false) ;

    useEffect(()=>{
      setTimeout(()=>(
        setIsOpen(true)
      ),5000)
    },[])


  return (
    <>
   { isOpen && <Popup
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    />}
    <Header/>
<Routes>
  
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />

</Routes>
    <Footer />
    </>
  )
}

export default App
