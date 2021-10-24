import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import routes from './routes'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        {/* Menu */}
        <Menu/>

        {/* Nội dung */}
        <Switch>
          <Route path='/Home' exact component={Home}/>
          {this.showContentmenus(routes)}
        </Switch>
      </div>
      </Router>
    );
  }

  showContentmenus = () =>{
    var result= null;
    if(routes.length>0){
      result = routes.map((route, index)=>{
        return (
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact}
            component={route.main}/>
        );
      });
    }
    return result;
  }
}

export default App;
