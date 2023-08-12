import React from 'react';
import { useCalculator } from './hooks/useCalculator';
import { Keypad, KeypadContainer } from './components/shared/Keypad';
import { Container } from './components/shared/Container';
import { Screen } from './components/shared/Screen';
import Navbar from './components/Navbar';

/**
 * Main component
 * @returns
 */
function App() {
  const {
    handleDeleteCharacter,
    handleButtonClick,
    handleReset,
    handleResult,
    screenElementRef,
    screenValue,
  } = useCalculator();

  return (
    <Container>
      <Navbar />
      <Screen ref={screenElementRef}>{screenValue}</Screen>
      <KeypadContainer>
        <Keypad onClick={handleButtonClick}>7</Keypad>
        <Keypad onClick={handleButtonClick}>8</Keypad>
        <Keypad onClick={handleButtonClick}>9</Keypad>

        <Keypad onClick={handleDeleteCharacter} deleteButton>
          DEL
        </Keypad>

        <Keypad onClick={handleButtonClick}>4</Keypad>
        <Keypad onClick={handleButtonClick}>5</Keypad>
        <Keypad onClick={handleButtonClick}>6</Keypad>

        <Keypad onClick={handleButtonClick}>+</Keypad>

        <Keypad onClick={handleButtonClick}>1</Keypad>
        <Keypad onClick={handleButtonClick}>2</Keypad>
        <Keypad onClick={handleButtonClick}>3</Keypad>

        <Keypad onClick={handleButtonClick}>-</Keypad>

        <Keypad onClick={handleButtonClick}>.</Keypad>
        <Keypad onClick={handleButtonClick}>0</Keypad>
        <Keypad onClick={handleButtonClick}>/</Keypad>

        <Keypad onClick={handleButtonClick}>x</Keypad>

        <Keypad onClick={handleReset} resetButton>
          RESET
        </Keypad>
        <Keypad onClick={handleResult} resultButton>
          =
        </Keypad>
      </KeypadContainer>
    </Container>
  );
}

export default App;
