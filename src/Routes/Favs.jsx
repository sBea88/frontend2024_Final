// import React from "react";
// import Card from "../Components/Card";

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Favs = () => {

//   return (
//     <>
//       <h1>Dentists Favs</h1>
//       <div className="card-grid">
//         {/* este componente debe consumir los destacados del localStorage */}
//         {/* Deberan renderizar una Card por cada uno de ellos */}
//       </div>
//     </>
//   );
// };

// export default Favs;

// import { useState, useEffect } from "react";
// import Card from "../Components/Card";

// const Favs = () => {
//   const [favs, setFavs] = useState([]);

//   useEffect(() => {
//     const savedFavs = JSON.parse(localStorage.getItem("favs")) || [];
//     setFavs(savedFavs);
//   }, []);

//   return (
//     <div>
//       <h1>Your Favorite Dentists</h1>
//       <div className="card-grid">
//         {favs.map((fav) => (
//           <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favs;
// VERSION PREVIA 

import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(savedFavs);
  }, []);

  return (
    <div>
      <h1>Your Favorite Dentists</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
