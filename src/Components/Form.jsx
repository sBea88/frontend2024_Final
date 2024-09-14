// import React from "react";


// const Form = () => {
//   //Aqui deberan implementar el form completo con sus validaciones

//   return (
//     <div>
//       <form>
//       </form>
//     </div>
//   );
// };

// export default Form;


// import { useState } from "react";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
//       setSuccess(true);
//       setError(false);
//     } else {
//       setError(true);
//       setSuccess(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p>Please verify your information</p>}
//       {success && <p>Thank you {name}, we will contact you soon via email</p>}
//     </div>
//   );
// };

// export default Form;
// VERSION PREVIA

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>Please verify your information</p>}
      {success && <p>Thank you {name}, we will contact you soon via email</p>}
    </div>
  );
};

export default Form;
