import './App.css'
import Boton from './components/Boton.jsx'
import ListaEstudiantes from './components/ListaEstudiantes.jsx'

function App() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <p>Esta es una aplicación de ejemplo utilizando Vite y React.</p>
      <Boton />
      <ListaEstudiantes nombre="Juana Perez" edad="20"/>
      <ListaEstudiantes nombre="Maria Gonzalez" />
      <ListaEstudiantes nombre="Pedro Perez" />
    </div>
  )
}

export default App
