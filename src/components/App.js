import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <div>
          <Inventory />
        </div>
        <div>
          <Order />
        </div>
      </div>
    );
  }
}

export default App;
