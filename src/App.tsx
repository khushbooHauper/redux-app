import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul style={{listStyle:'none'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/table" element={<UserTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;


function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}