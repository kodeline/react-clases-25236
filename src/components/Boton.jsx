const Boton = () => {
    const handleClick = () => {
        alert('¡Botón clickeado!');
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default Boton;