import { useState, MouseEvent, useEffect, useCallback, useRef } from 'react';
import * as mathjs from 'mathjs';

/**
 * Hook for calculator events
 * @returns
 */
export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState('');
  const screenElementRef = useRef<HTMLDivElement>(null);

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
      const result = String(mathjs.evaluate(screenValue.replace(/x/gm, '*')));
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

  /**
   * Handle the scroll of the values screen
   */
  useEffect(() => {
    const screenElement = screenElementRef.current;
    if (screenElement) screenElement.scrollTop = screenElement.scrollHeight;
  }, [screenValue]);

  return {
    screenValue,
    screenElementRef,
    handleButtonClick,
    handleDeleteCharacter,
    handleReset,
    handleResult,
  };
};
