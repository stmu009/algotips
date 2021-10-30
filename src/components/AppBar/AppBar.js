import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TableOfContents from '../TableOfContents';
import EmailSignUp from '../EmailSignUp';



export default function ButtonAppBar() {
  const [showTOC, setShowTOC] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowTOC(!showTOC)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          onClick={() => {
            setShowEmail(!showEmail)
          }}>
            AlgoTips
          </Typography>
          {
            // <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      {showTOC ? <TableOfContents></TableOfContents>:null}
      {showEmail ? <EmailSignUp></EmailSignUp>: null}
    </Box>
  );
}