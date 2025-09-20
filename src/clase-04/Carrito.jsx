import { useState } from "react";

const Carrito = () => {
  const listaProductos = [
    { id: 1, nombre: "Papas", precio: 1500 },
    { id: 2, nombre: "Tomates", precio: 1800 },
    { id: 3, nombre: "Cilantro", precio: 2000 },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
	
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {listaProductos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} : {producto.precio}$
            <button onClick={() => agregarCarrito(producto)}>Agregar</button>
          </li>
        ))}
      </ul>
      <hr></hr>
      <h2>Carrito</h2>
      {carrito.map((producto, indice) => (
        <div key={indice}>
          <p>
            {producto.nombre} : {producto.precio}$
          </p>
        </div>
      ))}

      <button onClick={() => vaciarCarrito()}>Vaciar</button>
    </div>
  );
};

export default Carrito;
