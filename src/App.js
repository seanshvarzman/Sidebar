import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {Sidebardata} from './components/Sidebardata';

function App() {
  return (
    <div className="App">
     <Sidebar />
    </div>
  );
}

export default App;
