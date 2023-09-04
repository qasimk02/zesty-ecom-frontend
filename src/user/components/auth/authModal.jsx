import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import React from "react";
import Register from "./register";
import Login from "./login";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ open, handleClose }) => {
  const location = useLocation();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            {location.pathname === "/login" ? <Login /> : <Register />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AuthModal;
