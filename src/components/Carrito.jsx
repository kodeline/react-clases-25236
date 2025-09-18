import { useState } from "react";

const Carrito = () => {

	const listaProductos = [
		{id: 1, nombre: "Zapas Nike", precio: 84500 },
		{id: 2, nombre: "Remera Pumas", precio: 36500 },
		{id: 3, nombre: "Buzo Adidas ", precio: 52500 }
	];

	const [carrito, setCarrito] = useState([]);
	
	const agregarCarrito = (producto) => {
		setCarrito([...carrito, producto]);
	}

	const vaciarCarrito = () => {
		setCarrito([]);
	}

  return(
		<div>
			<h3>Productos</h3>
			<ul>
				{listaProductos.map(producto => (
					<li key={producto.id}>
						{producto.nombre}:
						{producto.precio}$
						<button onClick={() => agregarCarrito(producto)}>
							Agregar
						</button> 
					</li>
				))}
			</ul>
			<hr></hr>
			<h3>Carrito</h3>
			{carrito.map((producto, index) =>
				<p key={index}> {producto.nombre}, {producto.precio}$ </p> 
			)}
			<button onClick={vaciarCarrito}>Eliminar</button> 
		</div>
  );
}

export default Carrito;