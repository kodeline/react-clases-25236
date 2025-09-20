import { useState } from "react";

const Boton = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h3>{contador}</h3>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </>
  );
};

export default Boton;
