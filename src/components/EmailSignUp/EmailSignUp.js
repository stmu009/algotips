import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import {
  Grid4x4Rounded,
  GridGoldenratioSharp,
  GridOnRounded,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const submitEmail = () => {
  console.log(`this`, this);
};

const EmailSignUp = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        rowSpacing={4}
        
      >
      <Grid item margin={"dense"}>
          <Typography variant="body1" color="initial">
            AlgoTips is a site with tips for coding interviews and questions for
            each tip.
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography margin={"dense"} variant="body2" color="initial">
            Enter an email address to receive AlgoTips in your inbox
          </Typography>
        </Grid>
        <Grid item xs>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin={"dense"}
          />
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={2}>
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="success" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <Button color="secondary" variant="contained">
              Skip
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailSignUp;
