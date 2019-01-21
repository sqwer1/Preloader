import 'babel-polyfill';
import React from 'react';

import ReactDOM from "react-dom";



class Preloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  };
  
componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  render() {
    return (
    <div>
    <div style={ {
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
        } }>
    <div style={ {
          margin: 'auto',
          width: 200
        } }>
      <div style={ {
          background: '#eee',
          marginLeft: 'auto',
          width: this.state.animate ? 0 : 200,
          height: 35,
          transition: 'all ease-in 0.6s',
        } }>
      </div>
      <div style={ {
          background: '#eee',
          marginTop: 10,
          marginLeft: 'auto',
          width: this.state.animate ? 0 : 200,
          height: 35,
          transition: 'all ease-in 0.6s 0.2s',
        } }>
      </div>
      <div style={ {
          background: '#eee',
          marginTop: 10,
          marginLeft: 'auto',
          width: this.state.animate ? 0 : 200,
          height: 35,
          transition: 'all ease-in 0.6s 0.4s',
        } }>
      </div>
      <div style={ {
          background: '#eee',
          marginTop: 10,
          marginLeft: 'auto',
          width: this.state.animate ? 0 : 200,
          height: 35,
          transition: 'all ease-in 0.6s 0.6s',
        } }>
      </div>
   </div>
   </div>
   </div>
    );
  }
}
ReactDOM.render(
	<div>
    <Preloader/>
  </div>, document.getElementById('fieldToShow'));