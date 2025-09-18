import { useState } from "react";

const Boton = () => {

	const [contador, setContador] = useState(0);

  return(
		<>
			<p>{contador}</p>
			<button 
				onClick={() => setContador(contador + 1 )}> 
					Incrementar 
			</button>
		</>
		
	);
};

export default Boton;
