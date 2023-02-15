import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <AppBar sx={{ bgcolor: "black" }} position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="white">
              Welcome to React router
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="contact">Contact</Link>{" "}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
