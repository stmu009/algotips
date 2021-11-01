import AppBar from "../../components/AppBar";
import Box from "@mui/material/Box";
// import EmailSignUp from "../../components/EmailSignUp";
// import Results from "../../components/Results";
import VerticalStepper from "../../components/VerticalStepper"

const Home = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        {
          // <EmailSignUp></EmailSignUp>
          <VerticalStepper></VerticalStepper>
          // <Results></Results>
        }

      </Box>
    </>
  );
};

export default Home;
