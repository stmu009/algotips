import * as React from "react";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Questions from "../../data/questions"

export default function ErrorRadios(props) {
  const { sectionLabel, handleIncorrect , handleTime } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [answerFeedback, setAnswerFeedback] = React.useState([]);

  const question = Object.keys(Questions[sectionLabel][0])[0]

  const originalAnswerFeedback = Questions[sectionLabel][0][question]?.choicesWithFeedback || {}

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    setAnswerFeedback(
      Object.keys(originalAnswerFeedback)
        ?.sort(() => 0.5 - Math.random())
    );
  }, [originalAnswerFeedback]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const answer = Object.keys(originalAnswerFeedback)[0];
    if(answer === value)
      {
        setError(false) 
        handleTime(seconds)
        console.log('seconds:\n\n', seconds)
        reset()
      }
    else {
        setError(true); 
        handleIncorrect();
      };
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
        <FormHelperText sx={{ color: 'green', fontSize: 'large' }}>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}
