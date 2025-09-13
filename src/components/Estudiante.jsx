import Boton from "./Boton";

const Estudiante = ({datos}) => {
const {nombre, edad } = datos; 
return (
    <div>
       <h3>Nombre:{nombre} , Edad:{edad} </h3>
       <Boton />
    </div>
);
}

export default Estudiante;