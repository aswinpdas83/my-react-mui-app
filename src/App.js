import { Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (
    <div >
      <h1>Hello World</h1>
      <Button variant="contained" startIcon={<SettingsIcon />}>Hello World</Button>
    </div >
  );
}

export default App;
