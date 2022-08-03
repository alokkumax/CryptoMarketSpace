import './App.css';
import Home from './component/Home';
import All from './component/All';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Gain from './component/Gain';
import Loss from './component/Loss';
import Graph from './component/Graph';

function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route exact path="/" element={<All/>}/>
        <Route exact path="/gain" element={<Gain/>}/>
        <Route exact path="/loss" element={<Loss/>}/>
        <Route exact path="/graph" element={<Graph/>}/>
      </Routes>
    </Router>
  );
}

export default App;
