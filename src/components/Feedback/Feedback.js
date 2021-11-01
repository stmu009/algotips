import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function ErrorRadios(props) {
  const { sectionLabel } = props;

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`sectionLabel:\n\n`, sectionLabel)

    //submit feedback for the given sectionLabel
    //go to next section
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">How would you rate the question?</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="toohard" control={<Radio />} label="The question was too hard" />
          <FormControlLabel value="tooeasy" control={<Radio />} label="The question was too easy" />
          <FormControlLabel value="justright" control={<Radio />} label="The question was just right" />
          <FormControlLabel value="broken" control={<Radio />} label="There is something wrong with the question" />
        </RadioGroup>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Submit Feedback
        </Button>
      </FormControl>
    </form>
  );
}
