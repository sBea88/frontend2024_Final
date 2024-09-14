// import React from 'react'
// import Card from '../Components/Card'
// const Home = () => {
//   return (
//     <main className="" >
//       <h1>Home</h1>
//       <div className='card-grid'>
//         {/* Aqui deberias renderizar las cards */}
//       </div>
//     </main>
//   )
// }

// export default Home

// import { useContext } from "react";
// import { ContextGlobal } from "../Components/utils/global.context"; 
// import Card from "../Components/Card";


// const Home = () => {
//   const { state } = useContext(ContextGlobal);

//   return (
//     <main className={state.theme}>
//       <h1>Home</h1>
//       <div className="card-grid">
//         {state.data.map((dentist) => (
//           <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} imageUrl={dentist.imageUrl}/>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;
// VERSION PREVIA

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context"; 
import Card from "../Components/Card";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} imageUrl={dentist.imageUrl}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
