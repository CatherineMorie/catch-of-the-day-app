import Fish from './Fish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import React from 'react';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // 1. Take a copy of the existing state (do not modify directly)
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      fishes,
    });
  };

  addToOrder = (key) => {
    // 1. Take a copy of the existing state (do not modify directly)
    const order = { ...this.state.order };
    // 2. Add to or update # in order
    order[key] = order[key] + 1 || 1;
    // 3. Update state object
    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              ></Fish>
            ))}
          </ul>
        </div>
        <div>
          <Order />
        </div>
        <div>
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
      </div>
    );
  }
}

export default App;
