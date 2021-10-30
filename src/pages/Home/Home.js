import AppBar from "../../components/AppBar";
import ComplexCard from "../../components/ComplexCard";
import Box from "@mui/material/Box";
import EmailSignUp from "../../components/EmailSignUp";
import Results from "../../components/Results";
import Parent from "../../components/test"

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
          // <ComplexCard/>
          <Parent></Parent>
          // <Results></Results>
        }

      </Box>
    </>
  );
};

export default Home;
