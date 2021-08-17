import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './components/Todo';
import Development from './components/Development.js';
import Testing from './components/Testing.js';
import Done from './components/Done.js';

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Navbar} ></Route>
        <Route path="/" exact component={Todo}></Route>
        <Route path="/development" exact>
          <Development />
        </Route>
        <Route path="/testing" exact component={Testing}></Route>
        <Route path="/done" exact component={Done}></Route>
      </Router>
    </>
  );
}

export default App;
