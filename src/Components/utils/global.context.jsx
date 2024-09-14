/* eslint-disable react/prop-types */
// import { createContext } from "react";

// export const initialState = {theme: "", data: []}

// export const ContextGlobal = createContext(undefined);

// export const ContextProvider = ({ children }) => {
//   //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

//   return (
//     <ContextGlobal.Provider value={{}}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };

// import { createContext, useReducer, useEffect } from "react";

// export const initialState = {
//   theme: "light",
//   data: [],
// };

// const globalReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_THEME":
//       return { ...state, theme: action.payload };
//     case "SET_DATA":
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

// export const ContextGlobal = createContext(undefined);

// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, initialState);

//   useEffect(() => {
//     // Fetching data from the API
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "SET_DATA", payload: data });
//       });
//   }, []);

//   const changeTheme = () => {
//     dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
//   };

//   return (
//     <ContextGlobal.Provider value={{ state, changeTheme }}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };


// import React, { createContext, useReducer, useEffect } from "react";
// import axios from "axios";

// // Estado inicial para el contexto global
// export const initialState = {
//   theme: "light",  // Tema inicial
//   data: [],        // Información traída de la API
// };

// // Tipos de acciones para el reducer
// const actionTypes = {
//   TOGGLE_THEME: "TOGGLE_THEME",
//   SET_DATA: "SET_DATA",
// };

// // Reducer que maneja los cambios en el estado global
// const globalReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.TOGGLE_THEME:
//       return {
//         ...state,
//         theme: state.theme === "light" ? "dark" : "light",
//       };
//     case actionTypes.SET_DATA:
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Crear el contexto global
// export const ContextGlobal = createContext();

// // Proveedor del contexto
// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, initialState);

//   // Llamada a la API con axios para obtener los datos de los dentistas
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         dispatch({ type: actionTypes.SET_DATA, payload: response.data });
//       })
//       .catch(error => console.error("Error fetching data: ", error));
//   }, []);

//   // Cambiar tema (acción para el botón)
//   const toggleTheme = () => {
//     dispatch({ type: actionTypes.TOGGLE_THEME });
//   };

//   return (
//     <ContextGlobal.Provider value={{ state, toggleTheme }}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };


// import { createContext, useReducer, useEffect } from "react";
// import axios from "axios";

// // Estado inicial para el contexto global
// const initialState = {
//   theme: "light",  // Tema inicial
//   data: [],        // Información traída de la API
// };

// // Tipos de acciones para el reducer
// const actionTypes = {
//   TOGGLE_THEME: "TOGGLE_THEME",
//   SET_DATA: "SET_DATA",
// };

// // Reducer que maneja los cambios en el estado global
// const globalReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.TOGGLE_THEME:
//       return {
//         ...state,
//         theme: state.theme === "light" ? "dark" : "light",
//       };
//     case actionTypes.SET_DATA:
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// };

// // Crear el contexto global
// export const ContextGlobal = createContext();

// // Proveedor del contexto
// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, initialState);

//   // Llamada a la API con axios para obtener los datos de los dentistas
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         dispatch({ type: actionTypes.SET_DATA, payload: response.data });
//       })
//       .catch(error => console.error("Error fetching data: ", error));
//   }, []);

//   // Cambiar tema (acción para el botón)
//   const toggleTheme = () => {
//     dispatch({ type: actionTypes.TOGGLE_THEME });
//   };

//   return (
//     <ContextGlobal.Provider value={{ state, toggleTheme }}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };
// VERSION PREVIA

import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  theme: "light",  
  data: [],        
};

const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_DATA: "SET_DATA",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch({ type: actionTypes.SET_DATA, payload: response.data });
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  const toggleTheme = () => {
    dispatch({ type: actionTypes.TOGGLE_THEME });
  };

  return (
    <ContextGlobal.Provider value={{ state, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};


