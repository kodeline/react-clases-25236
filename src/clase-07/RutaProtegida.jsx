import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ estaAutenticado, children }) => {
  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RutaProtegida;