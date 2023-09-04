import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../state/Auth/action";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwtToken = localStorage.getItem("jwtToken");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwtToken) {
      dispatch(getUser(jwtToken));
    }
  }, [auth.jwtToken, jwtToken]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="w-full"
              variant="contained"
              type="submit"
              size="large"
              sx={{ bgcolor: "#9155FD", padding: "0.8rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="mt-2">
        <div className="flex justify-center items-center">
          <p>If you've already account?</p>
          <Button
            onClick={() => navigate("/login")}
            size="small"
            className="ml-5"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Register;
