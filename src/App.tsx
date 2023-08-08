import React from 'react';
import { Keypad, KeypadContainer } from './components/shared/Keypad';
import { Container } from './components/shared/Container';
import { Screen } from './components/shared/Screen';
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
      <KeypadContainer>
        <Keypad>7</Keypad>
        <Keypad>8</Keypad>
        <Keypad>9</Keypad>

        <Keypad deleteButton>DEL</Keypad>

        <Keypad>4</Keypad>
        <Keypad>5</Keypad>
        <Keypad>6</Keypad>

        <Keypad>+</Keypad>

        <Keypad>1</Keypad>
        <Keypad>2</Keypad>
        <Keypad>3</Keypad>

        <Keypad>-</Keypad>

        <Keypad>.</Keypad>
        <Keypad>0</Keypad>
        <Keypad>/</Keypad>

        <Keypad>x</Keypad>

        <Keypad resetButton>RESET</Keypad>
        <Keypad resultButton>=</Keypad>
      </KeypadContainer>
    </Container>
  );
}

export default App;
