import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Index from './components/employee/index.component';
import Edit from './components/employee/edit.component';
import Create from './components/employee/create.component';

class App extends Component {
  render() {
    return (
     <Router>
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <Link to={'/index'} className="navbar-brand">Employee Managment Application</Link>
           {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                 <Link to={'/index'} className="nav-link">Home</Link>
               </li>
               <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
               </li>
               <li className="nav-item">
                  <Link to={'/index'} className="nav-link">List</Link>
               </li>
             </ul>
           </div> */}
         </nav> <br/><br/>
         <Switch>
           <Route exact path='/create' component={Create}/>
           <Route path='/edit/:id' component={Edit}/>
           <Route path='/index' component={Index}/>
         </Switch>
       </div>
     </Router> 
    );
  }
}

export default App;
