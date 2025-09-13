import MiniBoton from "./MiniBoton";
const Boton = () => {
    const handleClick = () => {
        alert('¡Botón clickeado!');
    }
    
    return (
        <>
            <MiniBoton />
            <button onClick={handleClick}>Haceme Clic</button>
        </>     
    )
}

export default Boton;