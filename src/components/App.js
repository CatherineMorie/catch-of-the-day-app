import Header from './Header';
import Inventory from './inventory';
import Order from './order';
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
          {/* <Order /> */}
        </div>
      </div>
    );
  }
}

export default App;
