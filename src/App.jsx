
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";


// function App() {
//   return (
//       <div className="App">
//           <Navbar/>
//           <Footer/>
//       </div>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Routes/Home";
// import Contact from "./Routes/Contact";
// import Detail from "./Routes/Detail";
// import Favs from "./Routes/Favs";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/favs" element={<Favs />} />
//         <Route path="/dentist/:id" element={<Detail />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { useContext, useEffect } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const { state } = useContext(ContextGlobal);

  // Aplicar el tema global al body
  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <Outlet />  {/* Aquí se renderizarán las rutas */}
      <Footer />
    </div>
  );
};

export default App;



