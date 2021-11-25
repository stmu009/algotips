import AppBar from "../../components/AppBar";
import Box from "@mui/material/Box";
// import VerticalStepper from "../../components/VerticalStepper";

const Home = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 1,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: "90vw",
        }}
      >
        {/* {
          <TopicContext.Consumer>
            {() =>
               (
                <VerticalStepper ></VerticalStepper>
              ) 
            }
          </TopicContext.Consumer>
        } */}
      </Box>
    </>
  );
};

export default Home;
