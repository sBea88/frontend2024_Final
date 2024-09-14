// import React from 'react'

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Navbar = () => {

//   return (
//     <nav>
//       {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
//       {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
//       <button>Change theme</button>
//     </nav>
//   )
// }

// export default Navbar

// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ContextGlobal } from "../Components/utils/global.context"; 

// const Navbar = () => {
//   const { state, changeTheme } = useContext(ContextGlobal);

//   return (
//     <nav className={state.theme}>
//       <Link to="/">Home</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/favs">Favs</Link>
//       <button onClick={changeTheme}>Change theme</button>
//     </nav>
//   );
// };

// export default Navbar;

// import { useContext } from "react";
// import { ContextGlobal } from "../Components/utils/global.context";
// import { Link } from "react-router-dom";  // Para la navegación

// const Navbar = () => {
//   const { state, toggleTheme } = useContext(ContextGlobal);

//   return (
//     <nav className={state.theme}>
//       <Link to="/home">Home</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/favs">Favs</Link>
//       <button onClick={toggleTheme}>
//         Change to {state.theme === "light" ? "Dark" : "Light"} Theme
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
// VERSION PREVIA

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={toggleTheme}>
        Change to {state.theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </nav>
  );
};

export default Navbar;
