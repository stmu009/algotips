import AppBar from "../../components/AppBar";
import Box from "@mui/material/Box";
import VerticalStepper from "../../components/VerticalStepper";
import { createContext, useContext } from "react";

const TopicContext = createContext('something');

const Home = () => {
  return (
    <>
      <TopicContext.Provider value={"BUD"}>
        <AppBar value={"BUD"}/>
      </TopicContext.Provider>
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
          <TopicContext.Consumer>
            {(value) => <VerticalStepper value={"BUD"}></VerticalStepper>}
          </TopicContext.Consumer>
        }
      </Box>
    </>
  );
};

export default Home;
