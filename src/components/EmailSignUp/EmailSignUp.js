import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useStore } from "../../store/useStore";

const submitEmail = (email) => {
  console.log(`email:\n\n`, email);
  const url = `/email?email=${email}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const EmailSignUp = (props) => {
  const { setCurrentTopic } = useStore();
  const [email, setEmail] = useState("");
  const { toggleEmail } = props;

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
          <Typography
            variant="body1"
            color="initial"
            sx={{ p: 4, textAlign: "left", maxWidth: "70%", margin: "0 auto" }}
          >
            <p>
              AlgoTips is a micro lesson learning tool with various forms of
              feedback to keep you engaged.
              <br />
              <br />
              AlgoTips is intended for an experienced software engineer to
              review within a few days or hours before an interview.
              <br />
              <br />
              <br />
              <br />
              AlgoTips presents the user with various tips including:
              <ul>
                <li>Recursion</li>
                <li>Big O Notation</li>
                <li>Graphs</li>
                <li>Hash Tables</li>
                <li>BUD (bottlenecks, unnecessary work, duplicate work)</li>
              </ul>
              <br />
              <br />
              After reviewing a tip, a multiple-choice question is presented.
              <br />
              <br />
              There is feedback if you answers correctly or incorrectly.
              <br />
              <br />
              The final step for each section is for you to provide feedback.
            </p>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography margin={"dense"} variant="body2" color="initial">
            Review the first tip after subscribing, unsubscribing or skipping this section.
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
              onClick={() => {
                toggleEmail();

                setCurrentTopic("all");
              }}
            >
              Unsubscribe
            </Button>
            <Button
              onClick={() => {
                submitEmail(email);
                toggleEmail();
                setCurrentTopic("all");
              }}
              color="success"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Subscribe
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                toggleEmail();

                setCurrentTopic("all");
              }}
            >
              Skip
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailSignUp;
