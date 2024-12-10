import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Container, Button, TextField, Typography, Box } from "@mui/material";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  form {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .MuiTextField-root {
    margin-bottom: 20px;
  }

  .MuiButton-root {
    margin-top: 10px;
  }

  .register-link {
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    form {
      max-width: 300px; 
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .MuiTextField-root {
      margin-bottom: 15px;
    }

    .MuiButton-root {
      font-size: 0.875rem;
      padding: 10px;
    }

    .register-link {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 576px) {
    form {
      max-width: 260px; 
      padding: 15px;
      border-radius: 6px; 
    }

    .MuiTextField-root {
      margin-bottom: 10px;
    }

    .MuiButton-root {
      font-size: 0.8rem;
      padding: 8px;
    }

    .register-link {
      font-size: 0.8rem;
    }
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = onLogin(email, password);
    if (isSuccess) {
      const user = { email }; 
      localStorage.setItem("user", JSON.stringify(user)); 
      navigate("/dashboard"); 
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <LoginWrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Box className="register-link">
            <Typography variant="body2">
              Don’t have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none", color: "#1976d2" }}>
                Register here
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </LoginWrapper>
  );
};

export default Login;