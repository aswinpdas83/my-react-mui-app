import { Button, styled, Typography } from "@mui/material";
import { Settings, Add } from '@mui/icons-material';

function App() {

  const BlueButton = styled(Button)({
    background: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "White",
      border: 5
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  })
  return (
    <div >
      <h1>Hello World</h1>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="primary">Contained</Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="secondary"
      >
        Add item
      </Button>
      <Button variant="outlined" >Outlined</Button>
      <Typography variant="h1" component="p">
        it used h1 style. but its p tag.
      </Typography>
      <BlueButton>
        My Custom Button 1.
      </BlueButton>
      <BlueButton>
        My Custom Button 2.
      </BlueButton>
    </div >
  );
}

export default App;
