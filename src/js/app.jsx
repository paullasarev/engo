require("../style/app.css");
// require("../index.html");

import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  render() {
    return (
      <div>Hello, world!</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));