import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
    let [User_id, Set_User_id] = useState('');
    let [password, set_Password] = useState('');
    const loginValues = { User_id, password };

    const handleLogin = (event) => {
        event.preventDefault();
        axios.get('http://localhost:3000/g_users', { name })
            .then((res) => {
                if (res && res.data) {
                    alert('Login Successful');
                    onLogin();
                    localStorage.clear();
                    localStorage.setItem('loggedInUser', res.data.User_id);
                    // Programmatically navigate to Home page
                    window.location.href = '/Home';
                } else {
                    alert('Wrong Credentials');
                }
            })
            .catch((err) => {
                console.error(err.response ? err.response.data : err);
                alert('Error in login');
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Login Page</h2>
                <form onSubmit={handleLogin}>
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
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded mt-3 hover:bg-gray-400" onClick={() => window.location.href = '/signup'}>Go to Signup</button>
            </div>
        </div>
    );
}

export default Login;
