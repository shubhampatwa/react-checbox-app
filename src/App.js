import React, { Component } from 'react';
import './App.css';
import Card from './component/card';

class App extends Component {
  state = {
    data: [
      {
        key: 1,
        title: "Room1",
        showCheckBox: false,
        isChecked: true
      },
      {
        key: 2,
        title: "Room2",
        showCheckBox: true,
        isChecked: false
      },
      {
        key: 3,  
        title: "Room3",
        showCheckBox: true,
        isChecked: false
      },
      {
        key: 4,
        title: "Room4",
        showCheckBox: true,
        isChecked: false
      }
    ]
  }

  constructor() {
    super();
    this.makePreviousCardsEnable = this.makePreviousCardsEnable.bind(this);
    this.makeNextCardsDisable = this.makeNextCardsDisable.bind(this);
  }

  makePreviousCardsEnable (position) {
    const data = this.state.data.map((item, index) => {
      if (index && index <= position) {
        return Object.assign(item, { isChecked: true });
      }
      return item;
    })
    this.setState({ data });
  }
  
  makeNextCardsDisable (position) {
    const data = this.state.data.map((item, index) => {
      if (index && index >= position) {
        return Object.assign(item, { isChecked: false });
      }
      return item;
    })
    this.setState({ data })
  }

  render() {
    return ( 
      <div className="App">
        <div className="container-fluid mt-3">
          <div className="row">
            {
              this.state.data.map((item, index) => {
                return (
                  <div  className="col-sm-3" key={item.key}> 
                    <Card
                      key={item.key}
                      position={index}
                      title={item.title}
                      isChecked={item.isChecked}
                      showCheckBox={item.showCheckBox}
                      makeNextCardsDisable={this.makeNextCardsDisable}
                      makePreviousCardsEnable={this.makePreviousCardsEnable}
                    />
                  </div>
                )    
              })
            }    
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
