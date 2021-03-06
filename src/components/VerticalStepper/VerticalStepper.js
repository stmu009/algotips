import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HorizontalStepper from "../HorizontalStepper";
import Topics from "../../data/tips";
import Results from "../../components/Results";

import { useStore } from "../../store/useStore";

// https://mui.com/components/steppers/#VerticalLinearStepper.js

const unsortedSteps = Object.keys(Topics).map((x) => ({ label: x }));

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [incorrect, setIncorrect] = React.useState(0);
  const [time, setTime] = React.useState(0);

  const { topic } = useStore();

  const steps = topic
    ? unsortedSteps.filter((step) => (step.label === topic || topic==="all"))
    : unsortedSteps;
  
  const totalSteps = steps?.length || 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: "80vw" }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{ padding: "1rem" }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <HorizontalStepper handleIncorrect={()=>{setIncorrect(incorrect+1)}} handleTime={(t)=>{setTime(time+t)}} sectionLabel={step.label}> </HorizontalStepper>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next Tip"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous Tip
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Results correct={totalSteps} incorrect = {incorrect} time={time}></Results>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
