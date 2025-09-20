import Estudiante from "../clase-03/Estudiante";

const ListaEstudiantes = () => {
  const datosEstudiantes = [
    { nombre: "Juan Pérez", edad: 20 },
    { nombre: "María Gómez", edad: 22 },
    { nombre: "Luis Rodríguez", edad: 21 },
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
