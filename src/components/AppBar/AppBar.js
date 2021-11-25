import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import TableOfContents from "../TableOfContents";
import EmailSignUp from "../EmailSignUp";
import VerticalStepper from "../VerticalStepper";

import { useStore } from "../../store/useStore";

export default function ButtonAppBar() {
  const [showTOC, setShowTOC] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const { topic, setCurrentTopic } = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ maxWidth: "90vw" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: "10%" }}
            onClick={() => {
              setShowTOC(!showTOC);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              setCurrentTopic("all")
              setShowEmail(false);
            }}
          >
            AlgoTips
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="email"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowEmail(true);
            }}
          >
            <EmailIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          minWidth: "90vw",
        }}
      >
        {showTOC ? (
          <TableOfContents
            toggleTOC={() => {
              setShowTOC(!showTOC);
              setShowEmail(false);
            }}
          ></TableOfContents>
        ) : null}
        {showEmail ? (
          <EmailSignUp
            toggleEmail={() => setShowEmail(!showEmail)}
          ></EmailSignUp>
        ) : topic ? (
          <VerticalStepper></VerticalStepper>
        ) : <EmailSignUp
        toggleEmail={() => setShowEmail(!showEmail)}
      ></EmailSignUp>}
      </Box>
    </Box>
  );
}
