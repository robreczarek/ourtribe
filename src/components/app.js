import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class app extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ourtribe</h2>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default app;
