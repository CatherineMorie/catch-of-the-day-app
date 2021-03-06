import Fish from './Fish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import PropTypes from 'prop-types';
import React from 'react';
import base from '../base';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object,
  };

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentDidMount() {
    const { params } = this.props.match;

    // 1. Reinstate local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update state
    fishes[key] = updatedFish;
    // 3. Set to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update state
    fishes[key] = null;
    // 3. Set to state
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    // 1. Take a copy of the existing state (do not modify directly)
    const order = { ...this.state.order };
    // 2. Add to or update # in order
    order[key] = order[key] + 1 || 1;
    // 3. Update state object
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    // 1. Take a copy of the existing state (do not modify directly)
    const order = { ...this.state.order };
    // 2. Add to or update # in order
    delete order[key];
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
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
        <div>
          <Inventory
            addFish={this.addFish}
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
            storeId={this.props.match.params.storeId}
          />
        </div>
      </div>
    );
  }
}

export default App;
