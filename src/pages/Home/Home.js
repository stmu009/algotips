import AppBar from "../../components/AppBar";
import Box from "@mui/material/Box";
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
          <VerticalStepper></VerticalStepper>
        }

      </Box>
    </>
  );
};

export default Home;
