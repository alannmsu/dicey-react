import React from 'react';
import './App.css';

import BasicRoll from '../BasicRoll/BasicRoll';
import AdvancedRoll from '../AdvancedRoll/AdvancedRoll';

class App extends React.Component {


   render() { 
    return (
      <div>
        <div className="title container-fluid">
          <div className="row justify-content-around">
            <h1 className="col align-self-center text-center">
              <i className="fas fa-dice-d20"></i> Get Dicey <i className="fas fa-dice-d20"></i>
            </h1>
          </div>

          <div className="row">
            <h2 className="col align-self-center text-center text-muted">Virtual Dice Roller</h2>
          </div>
        </div>

        <div className="container mt-5 w-100">
            <div className="row align-items-center justify-content-around text-center">
                  <div className="col">
                    <BasicRoll sidesOfDie="4" color="btn-primary" borderColor="border-primary" />
                  </div>
                  
                  <div className="col">
                    <BasicRoll sidesOfDie="6" color="btn-success" borderColor="border-success" />
                  </div>
                  
                  <div className="col">
                    <BasicRoll sidesOfDie="8" color="btn-warning" borderColor="border-warning" />
                  </div>
            </div>
            <div className="w-100 mt-3"></div>
            <div className="row align-items-center justify-content-around text-center">
                  <div className="col">
                    <BasicRoll sidesOfDie="10" color="btn-info" borderColor="border-info" />
                  </div>
                  <div className="col">
                    <BasicRoll sidesOfDie="12" color="btn-secondary" borderColor="border-secondary" />
                  </div>
                  <div className="col">
                    <BasicRoll sidesOfDie="20" color="btn-danger" borderColor="border-danger" />
                  </div>
                </div>
            </div>
        <AdvancedRoll />
      </div>
    );
  }
}

export default App;
