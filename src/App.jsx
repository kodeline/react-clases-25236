import './App.css'
import Header from './clase-03/Header.jsx' 
import Nav from './clase-03/Nav.jsx'
import Footer from './clase-03/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './clase-06/Inicio.jsx'
import Contacto from './clase-06/Contacto.jsx'
import DetalleProducto from './clase-06/DetalleProducto.jsx'


function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Routes>
        <Route path={'/'} element={<Inicio/>}/>
        <Route path={'/contacto'} element={<Contacto/>}/>
        <Route path={'/producto/:id'} element={<DetalleProducto/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
