import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div >
      <Box>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>

    </div>
  );
}

export default App;
