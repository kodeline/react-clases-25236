const Estudiante = ({datos}) => {
const {nombre, edad, foto } = datos; 
return (
    <div>
       <h3>Nombre:{nombre} , Edad:{edad} </h3>
       <img src={foto} />
    </div>
);
}

export default Estudiante;