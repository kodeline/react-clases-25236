import Estudiante from "../clase-03/Estudiante";

const ListaEstudiantes = () => {
  const datosEstudiantes = [
    { nombre: "Juan Pérez", edad: 20, foto:"https://res.cloudinary.com/dofynxdb2/image/upload/v1758667912/main-sample.png" },
    { nombre: "María Gómez", edad: 22, foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg" },
    { nombre: "Luis Rodríguez", edad: 21, foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg" },
  ];

  return (
    <div>
      {datosEstudiantes.map((estudiante, index) => (
        <Estudiante key={index} datos={estudiante} />
      ))}
    </div>
  );
};

export default ListaEstudiantes;
