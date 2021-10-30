import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Question from "../Question";
import Feedback from "../Feedback";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ComplexCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleNextClick = () => {
    setExpanded(true);
    setFeedback(!feedback);
  };

  const tip = `
  <p>Much like the movie Inception, recursion can be a confusing topic.
  <br/>In the example, in the image above we can see how the string is reversed one letter at a time.
  <br/>In <strong>JavaScript</strong>, the code would look like this:
  </p>
  <pre style="overflow:scroll;
  background-color: #eee;
    border: 1px solid #999;
    display: block;
    padding: 20px;">
  <code style="">
  const reverse = (string) => {
    if (string.length === 0) {
        return "";
    }
    return string[string.length - 1] 
      + reverse(string.substring(0, string.length - 1));
  }

  console.log('reverse('something'):', reverse('something'))
  // reverse('something'): gnihtemos 
  </code>
  </pre>
  
  The flow of this example is as follows:

  <ol>
  <li>
  Check if the string passed in is empty, if so return an empty string. (this ends the recursion)
  </li>
  <li>
  If the string passed in is not empty, then return a combined string from running the reverse function on the last character of the string and running the reverse function on the rest of the string as shown below:
  <ul>
  <li>
  g somethin
  </li>
  <li>
  gn somethi
  </li>
  <li>
  gni someth
  </li>
  <li>
  gnih someth
  </li>
  <li>
  gniht some
  </li>
  <li>
  gnihte som
  </li>
  <li>
  gnihtem so
  </li>
  <li>
  gnihtemo s
  </li>
  <li>
  gnihtemos 
  </li>
  </ul>
  </li>
  </ol>
  </p>

  <p>
  Notice how the reverse function is called within the definition of the reverse function.
  <br/>
  This is possible because the reverse function is taking a piece of the string until there is no string left.
  <br/>
  <strong>The keys to the recursion technique are having an exit or base condition that will stop the recursion and passing in parameters that target that condition. </strong>
  
  <p>
    
  </Button>
  <p>
  In the movie Inception they also had to enter and exit each dream within a dream one dream at a time.
  </p>
  `;

  const imageLink = "/images/reverseString.gif";
  const imageReference = "https://towardsdatascience.com/finding-a-recursive-solution-184784b0aea0";

  const tipReferences = [
    "https://stackoverflow.com/questions/27415470/javascript-recursion-reverse-string",
  ];

  return (
    <Card
      // sx={{ maxWidth: 345 }}
      sx={{ width: "80%" }}
    >
      <CardHeader
        title="Recursion"
        // subheader="Data Structures"
      />
      <CardMedia component="img" height="194" image={imageLink} alt="Random" />
      <Typography
        variant="caption"
        //component="h2"
      >
        <em>
          image source:
          {imageReference}
        </em>
      </Typography>
      <CardContent>
        {expanded ? (
          feedback ? (
            <Feedback />
          ) : (
            <Question />
          )
        ) : (
          <Typography align="left" variant="body2" color="text.secondary">
            <div dangerouslySetInnerHTML={{ __html: tip }}></div>
            <Typography
            variant="caption"
            //component="h2"
          >
            <em>
              reference(s):
              <ul style={{listStyle:'none'}}>
                {tipReferences.map((ref, i) => (
                  <li  key={i}>{ref}</li>
                ))}
              </ul>
            </em>
          </Typography>
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{
        // 
      }} disableSpacing>
        {expanded ? (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            color="primary"
            align="start"
            >
            <NavigateBeforeIcon />BACK
          </ExpandMore>
        ) : null}

        <ExpandMore
          expand={expanded}
          onClick={handleNextClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >NEXT
          <NavigateNextIcon color="success" />
        </ExpandMore>
      </CardActions>
      
    </Card>
  );
}
