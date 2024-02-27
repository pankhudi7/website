import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import About from './components/About/About';
import ThirdDiv from './components/Products/Products';
// import Navbar from './NavBar/Navbar';


function App() {
  return (
    <Router>
    <div className="App">
      Technavia India Pvt Ltd.   
      <About/>
      <ThirdDiv/>
      
    </div>
    </Router>
  );
}

export default App;
