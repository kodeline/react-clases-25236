import { useState } from 'react';
import { useEffect } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setProductos(datos);
        setCargando(false);
      })
      .catch(error => {
        setError('Ha Ocurrido un error...');
        setCargando(false);
      })
  },[]);

  if(cargando)
    return <p>Estan cargando los productos...</p>
  
  if(error)
    return <p>{error}</p>

  return(
    <>
    <ul>
      <h3>Productos</h3>
      {productos.map(producto => (
        
        <li>{producto.title} {producto.price}
          <img src={producto.image}/>
        </li>
        
      ))}
    </ul>
    </>
  );
}

export default Productos;