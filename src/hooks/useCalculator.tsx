import { useState, MouseEvent } from 'react';

/**
 * Hook for calculator events
 * @returns
 */
export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState('');

  /**
   * Function for calculator buttons
   * @param value
   */
  const handleButtonClick = (e: MouseEvent) => {
    const clickedButton = e.target as HTMLButtonElement;
    const contentButton = clickedButton.textContent;
    if (contentButton) {
      setScreenValue((prev) => prev + clickedButton.textContent);
    }
  };

  /**
   * Function to remove a number from the screen
   */
  const handleDeleteCharacter = () => {
    setScreenValue((prev) => prev.slice(0, -1));
  };

  /**
   * Function to remove everything from the screen
   */
  const handleReset = () => {
    setScreenValue('');
  };

  /**
   * Function to get the result
   */
  const handleResult = () => {
    try {
      const result = String(eval(screenValue.replace('x', '*')));
      setScreenValue(result);
    } catch (error) {
      setScreenValue('Syntax error');
    }
  };

  return {
    screenValue,
    handleButtonClick,
    handleDeleteCharacter,
    handleReset,
    handleResult,
  };
};
