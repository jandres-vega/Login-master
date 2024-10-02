import React from 'react';

const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/api/v1/auth/google';
    };
    return (
        <div>
            <button onClick={handleGoogleLogin}>Login</button>
        </div>
    );
};

export default Login;
