import React from 'react'
import './App.css';
import Navbar from './COMPONENT/Navbar';
import Passenger from './COMPONENT/Passenger';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './COMPONENT/Home';

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar/>
      <Switch>
            <Route exact path='/passenger' component={Passenger}/>
            <Route exact path='/' component={Home}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
