import React from 'react';
import { connect } from 'react-redux';

import './App.css';

const mapStateToProps = (state) =>{
  return{
    
  }
}

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
        App.jsx
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps, {})(App)
