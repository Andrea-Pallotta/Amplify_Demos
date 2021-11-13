import React, { useState } from 'react';
import { Button, TextField, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const LoginCustom = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function signIn(e) {
        e.preventDefault();
    }

    return (
        <Box component="form" sx={{display: 'flex', flexDirection: 'column'}} component="form" onSubmit={(e) => { signIn(e)}}>
            <TextField 
                label="Username"
                variant="filled"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <TextField 
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />  

            { (error) && 
            <Alert variant="filled" severity="error">
                {errorMessage}
            </Alert>}

            <Button variant="contained" onClick={() => navigate(-1)}>
                Go Back
            </Button>

            <Button type="submit" variant="contained" color="primary">
                Sign In
            </Button>
        </Box>

        
    );
}

export default LoginCustom;