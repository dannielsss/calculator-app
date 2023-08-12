import { useState, MouseEvent, useEffect, useCallback } from 'react';

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
  const handleResult = useCallback(() => {
    if (screenValue === '') return;

    try {
      const result = String(eval(screenValue.replace('x', '*')));
      setScreenValue(result);
    } catch (error) {
      setScreenValue('Syntax error');
    }
  }, [screenValue]);

  /**
   * To handle keyboard events
   */
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') return handleReset();
      if (event.key === 'Backspace') return handleDeleteCharacter();
      if (event.key === 'Enter') return handleResult();

      const keysNumbers = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'x',
        '/',
        '.',
      ];

      keysNumbers.forEach((key) => {
        if (event.key === key) return setScreenValue((prev) => prev + key);
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleResult]);

  return {
    screenValue,
    handleButtonClick,
    handleDeleteCharacter,
    handleReset,
    handleResult,
  };
};
