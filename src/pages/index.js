// // pages/index.js
// import { useState } from 'react';
// import axios from 'axios';
// // import Login from './login';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// // export default function Home() {
// // const [name, setName] = useState('');
// // const user = { name };
// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   try {
// //     const response = await axios.post('http://localhost:3000/g_users', { name });
// // console.log(response.data); // Logging the response data from the server
// // Optionally, you can reset the name input field after successful submission
// //     setName('');
// //   } catch (error) {
// //     console.error('Error submitting data:', error);
// //     // Optionally, you can show an error message to the user
// //   }
// //   ;

// //   // alert('Data submitted successfully!');
// // }
// // return (<>
// // {/* <div>
// //   <h1>Hello, {name || 'guest'}!</h1>
// //   <form onSubmit={handleSubmit}>
// //     <input
// //       type="String"
// //       value={name}
// //       onChange={(e) => setName(e.target.value)}
// //       placeholder="Enter your name"
// //     />
// //     <button type="submit">Submit</button>
// //   </form>
// // </div> */}
// {/* <Login /> */ }
// //   </>
// //   );
// // }

// function Signup({ onSignup }) {
//   let [User_id, Set_User_id] = useState('');
//   let [password, set_Password] = useState('');
//   // let [firstName, Set_First_Name] = useState('');
//   // let [lastName, Set_Last_Name] = useState('');
//   const signupValues = { User_id, password };
//   const navigate = useNavigate();

//   // Provide a default function for onSignup if it's not provided
//   onSignup = onSignup || function () { console.log('onSignup not provided'); };

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:3000/g_user', signupValues)
//       .then((res) => {
//         onSignup();
//         alert('Signup Successful');
//         navigate('/login');
//       })
//       .catch((err) => {
//         console.error(err);
//         alert('Error in Signing Up: ' + err.message);
//       });
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
//       <div className="text-center">
//         <h2>Signup Page</h2>
//         <form onSubmit={handleSignUp}>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               value={firstName}
//               onChange={(e) => Set_First_Name(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               value={lastName}
//               onChange={(e) => Set_Last_Name(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="userId">User ID:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="userId"
//               value={User_id}
//               onChange={(e) => Set_User_id(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => set_Password(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//         <button className="btn btn-secondary mt-3" onClick={() => navigate('/login')}>Go to Login</button>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';

function Signup({ onSignup }) {
  const [User_id, Set_User_id] = useState('');
  const [password, set_Password] = useState('');

  // Provide a default function for onSignup if it's not provided
  onSignup = onSignup || function () { console.log('onSignup not provided'); };
  // const signupValues = { };

  const handleSignUp = (event) => {
    event.preventDefault();
    const signupValues = { User_id, password }; // Create an object with user_id and password
    axios.post('http://localhost:3000/g_user', signupValues) // Pass the signupValues object as the second argument
      .then((res) => {
        onSignup();
        alert('Signup Successful');
        window.location.href = '/login'; // Navigate to login page
      })
      .catch((err) => {
        console.error(err);
        alert('Error in Signing Up: ' + err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Signup Page</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700">User ID:</label>
            <input
              type="text"
              id="userId"
              value={User_id}
              onChange={(e) => Set_User_id(e.target.value)}
              className="form-input mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => set_Password(e.target.value)}
              className="form-input mt-1 block w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </form>
        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded mt-3 hover:bg-gray-400" onClick={() => window.location.href = '/login'}>Go to Login</button>
      </div>
    </div>
  );
}

export default Signup;
