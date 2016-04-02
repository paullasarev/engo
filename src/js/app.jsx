require("../style/app.css");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Layout from './layout';

const routes = ( 
      <Route path="/" component={Layout}>
      </Route>
    );

export class App extends React.Component {
  render() {
    
  
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));