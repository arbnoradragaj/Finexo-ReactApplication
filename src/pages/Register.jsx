import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Container, Button, TextField, Typography } from "@mui/material";

const RegisterWrapper = styled.div`
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
  }
`;

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = onRegister(formData);

    if (success) {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <RegisterWrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            variant="outlined"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Typography variant="body2" style={{ marginTop: "15px", textAlign: "center" }}>
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
              Log in here
            </Link>
          </Typography>
        </form>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
