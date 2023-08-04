import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <NavBar />
       
      </Router>
  </>
  );
}

export default App;
