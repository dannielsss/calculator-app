import React from 'react';
import Container from './components/shared/Container';
import Screen from './components/shared/Screen';
import Navbar from './components/Navbar';

/**
 * Main component
 * @returns
 */
function App() {
  return (
    <Container>
      <Navbar />
      <Screen>349+234</Screen>
    </Container>
  );
}

export default App;
