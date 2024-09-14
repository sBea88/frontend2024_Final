//import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Detail = () => {
 
//   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

//   return (
//     <>
//       <h1>Detail Dentist id </h1>
//       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
//       {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
//     </>
//   )
// }

// export default Detail

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Para obtener parámetros de la URL
// import axios from 'axios'; // Para realizar la solicitud a la API

// const Detail = () => {
//   const { id } = useParams(); // Obtener el ID del parámetro de la URL
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch de usuario específico
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(response => setUser(response.data))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, [id]);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Detail for User {user.id}</h1>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Website:</strong> {user.website}</p>
//     </div>
//   );
// }

// export default Detail;

// import { useState, useEffect } from 'react'; 
// import { useParams } from 'react-router-dom'; // Para obtener parámetros de la URL
// import axios from 'axios'; // Para realizar la solicitud a la API

// const Detail = () => {
//   const { id } = useParams(); // Obtener el ID del parámetro de la URL
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Añadimos un estado de carga
//   const [error, setError] = useState(null); // Añadimos un estado de error

//   useEffect(() => {
//     // Fetch de usuario específico
//     setLoading(true);
//     setError(null); // Reiniciar el estado de error antes de la solicitud
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(response => {
//         setUser(response.data);
//         setLoading(false); // Terminamos la carga
//       })
//       .catch(() => {
//         setError('Error fetching user data');
//         setLoading(false); // Terminamos la carga aunque haya error
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga
//   if (error) return <p>{error}</p>; // Mostrar mensaje de error si falla el fetch
//   if (!user) return <p>No user data available</p>; // Asegurarse de que haya datos antes de renderizar

//   return (
//     <div>
//       <h1>Detail for User {user.id}</h1>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p> {/* Linkeamos el website del usuario */}
//     </div>
//   );
// }

// export default Detail;
// VERSION PREVIA

import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null); 
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching user data');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 
  if (!user) return <p>No user data available</p>; 

  return (
    <div>
      <h1>Detail for User {user.id}</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
    </div>
  );
}

export default Detail;

