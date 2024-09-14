// import React from "react";


// const Card = ({ name, username, id }) => {

//   const addFav = ()=>{
//     // Aqui iria la logica para agregar la Card en el localStorage
//   }

//   return (
//     <div className="card">
//         {/* En cada card deberan mostrar en name - username y el id */}

//         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

//         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
//         <button onClick={addFav} className="favButton">Add fav</button>
//     </div>
//   );
// };



// import PropTypes from 'prop-types';

// const Card = ({ name, username, id, imageUrl }) => {
//   const handleFav = () => {
//     let favs = JSON.parse(localStorage.getItem("favs")) || [];
//     const isFav = favs.some(fav => fav.id === id);
//     if (!isFav) {
//       favs.push({ name, username, id });
//       localStorage.setItem("favs", JSON.stringify(favs));
//       alert("Added to favorites!");
//     }
//   };

//   return (
//     <div className="card">
//       {imageUrl && <img src={'public/images/doctor.jpg'} alt='doc' className="card-image" />} {/* Renderiza la imagen si imageUrl está definido */}
//       <h2>{name}</h2>
//       <p>{username}</p>
//       <button onClick={handleFav}>Add to Favs</button>
//     </div>
//   );
// };

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string
// };

// export default Card;


// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Importamos Link para la navegación

// const Card = ({ name, username, id, imageUrl }) => {
//   const handleFav = (e) => {
//     e.stopPropagation(); // Evitar que el link se dispare al hacer clic en el botón de favoritos
//     let favs = JSON.parse(localStorage.getItem("favs")) || [];
//     const isFav = favs.some(fav => fav.id === id);
//     if (!isFav) {
//       favs.push({ name, username, id, imageUrl });
//       localStorage.setItem("favs", JSON.stringify(favs));
//       console.log("Added to favorites!"); // Usamos console.log en lugar de alert
//     } else {
//       console.log("Already in favorites");
//     }
//   };

//   return (
//     <div className="card">
//       <Link to={`/detail/${id}`} className="card-link">
//         {imageUrl && <img src={'/images/doctor.jpg'} alt='doc' className="card-image" />} {/* Renderiza la imagen si imageUrl está definido */}
//         <h2>{name}</h2>
//         <p>{username}</p>
//       </Link>
//       <button onClick={handleFav}>Add to Favs</button> {/* Botón para agregar a favoritos */}
//     </div>
//   );
// };

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string
// };

// export default Card;


// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Importamos Link para la navegación

// const Card = ({ name, username, id, imageUrl }) => {
//   const handleFav = (e) => {
//     e.stopPropagation(); // Evitar que el link se dispare al hacer clic en el botón de favoritos
//     let favs = JSON.parse(localStorage.getItem("favs")) || [];
//     const isFav = favs.some(fav => fav.id === id);
//     if (!isFav) {
//       favs.push({ name, username, id, imageUrl });
//       localStorage.setItem("favs", JSON.stringify(favs));
//       console.log("Added to favorites!"); // Usamos console.log en lugar de alert
//     } else {
//       console.log("Already in favorites");
//     }
//   };

//   return (
//     <div className="card">
//       <Link to={`/detail/${id}`} className="card-link">
//         {imageUrl && <img src='/images/doctor.jpg' alt='doc' className="card-image" />} {/* Ruta correcta para imagen en public */}
//         <h2>{name}</h2>
//         <p>{username}</p>
//       </Link>
//       <button onClick={handleFav}>Add to Favs</button> {/* Botón para agregar a favoritos */}
//     </div>
//   );
// };

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string
// };

// export default Card;
// VERSION PREVIA

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const Card = ({ name, username, id, imageUrl }) => {
  const handleFav = (e) => {
    e.stopPropagation(); 
    let favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isFav = favs.some(fav => fav.id === id);
    if (!isFav) {
      favs.push({ name, username, id, imageUrl });
      localStorage.setItem("favs", JSON.stringify(favs));
      console.log("Added to favorites!"); 
    } else {
      console.log("Already in favorites");
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`} className="card-link">
        {imageUrl && <img src={imageUrl} alt='doc' className="card-image" />} 
        <h2>{name}</h2>
        <p>{username}</p>
      </Link>
      <button onClick={handleFav}>Add to Favs</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
};

export default Card;

