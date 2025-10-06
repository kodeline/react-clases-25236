import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ backgroundColor: "", color: "white", padding: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
        }}
      >
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>Acerca de</li>
        <li>
          <Link to={"contacto"}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
