import AddFishForm from './AddFishForm';
import React from 'react';

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory!!!</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
