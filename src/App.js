import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
      </section>
    );
  }
}

export default App;
