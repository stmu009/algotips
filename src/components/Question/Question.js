import * as React from "react";
import { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function ErrorRadios() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [answerFeedback, setAnswerFeedback] = React.useState([]);

  const question = "How do you stop a recursive loop?";

  const originalAnswerFeedback = {
    "By having a base condition and parameters that will reach the base condition":
      "You got it!",
    "A base condition":
      "Almost, but the values passed into the recursive function are also important.",
    "Decreasing values passed into the recursive function":
      "Not quite. A base condition is needed and parameter to reach the condition which may be increasing.",
    "Wait for the sedative to wear off":
      "In the movie Inception that may have helped but not in your code."
    };

  useEffect(() => {
    setAnswerFeedback(
      Object.keys(originalAnswerFeedback)
        .sort(() => 0.5 - Math.random())
    );
  }, []);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const answer = Object.keys(originalAnswerFeedback)[0];
    answer === value ? setError(false) : setError(true);
    setHelperText(
      originalAnswerFeedback[value]
        ? originalAnswerFeedback[value]
        : "Please select an option"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {answerFeedback.map((key, i) => {
            return (
              <FormControlLabel
                key={i}
                value={key}
                control={<Radio />}
                label={key}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText sx={{color:'green'}}>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}
