
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home';
import Header from "./comp/Header/Header"
import Footer from "./comp/footer/Footer"

function App() {


  return (
    <>
    <Header/>
<Routes>
  
  <Route path="/" element={<Home/>} />
</Routes>
    <Footer />
    </>
  )
}

export default App
