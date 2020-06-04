import AddFishForm from './AddFishForm';
import React from 'react';

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory!!!</h2>
        <AddFishForm />
      </div>
    );
  }
}

export default Inventory;
