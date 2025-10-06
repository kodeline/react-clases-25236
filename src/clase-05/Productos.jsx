import { useState, useEffect } from "react";

const Productos = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://68d5d31de29051d1c0afa93e.mockapi.io/productos')
      // resuelve una promesa y genera otra promesa
      .then(respuesta => respuesta.json())  
      // resuelve la promesa que se genero en la linea anterior
      .then(datos => {
        setProducto(datos);
      })
      // sino resuelve ninguna promesa entra aca en el catch
      .catch(error => {
        setError('Error al cargar tus productos')  
      })
      // el finally se ejecuta se resuelva o no la promesa.
      .finally(() => setCargando(false))

  },[]);

  if(cargando)
    return <p>Estamos cargando sus productos.</p>
  
  if(error)
    return <p>{error}</p>

  return(
  <>
  <h2>Productos</h2>
  <ul>
    {producto.map(producto =>(
      <li key={producto.id}>Producto: {producto.nombre} = Precio {producto.precio}$</li>
    ))}
  </ul>
  </>  
  );
}

export default Productos;