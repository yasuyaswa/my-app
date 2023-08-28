import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logoContainer'>
        <img src={logo} className="App-logo" alt="logo" width="150px"/>
        <ul className='nav-items'>
          <li>Profile</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <h1>React is a JavaScript Library</h1>
        </div>
        <p>
          React is easy to Learn
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='primary'>Learn React</button>

        </a>
      </header>
      <footer>©2023 React Version 18. All rights reserved</footer>
    </div>
  );
}

export default App;
