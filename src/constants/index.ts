import themes from '../config/themes.json';

export const COLORS = {
  light: {
    mainText: themes.light.text.grayish,
    mainBackground: themes.light.background.main,
    screenBackground: themes.light.background.screen,

    buttonText: themes.light.text.grayish,

    keypadBackground: themes.light.background.toggle_keypad,

    keysBackground: themes.light.keys.grayish.background,
    keysShadow: themes.light.keys.grayish.shadow,

    deleteButtonTextColor: themes.light.text.white,
    deleteButtonBackground: themes.light.keys.cyan.background,
    deleteButtonShadow: themes.light.keys.cyan.shadow,

    resultButtonTextColor: themes.light.text.white,
    resultButtonBackground: themes.light.keys.orange.background,
    resultButtonShadow: themes.light.keys.orange.shadow,
  },
  dark: {
    mainText: themes.dark.text.white,
    mainBackground: themes.dark.background.main,
    screenBackground: themes.dark.background.screen,

    buttonText: themes.dark.text.grayish,

    keypadBackground: themes.dark.background.toggle_keypad,

    keysBackground: themes.dark.keys.white.background,
    keysShadow: themes.dark.keys.white.shadow,

    deleteButtonTextColor: themes.dark.text.white,
    deleteButtonBackground: themes.dark.keys.blue.background,
    deleteButtonShadow: themes.dark.keys.blue.shadow,

    resultButtonTextColor: themes.dark.text.white,
    resultButtonBackground: themes.dark.keys.red.background,
    resultButtonShadow: themes.dark.keys.red.shadow,
  },
  violet: {
    mainText: themes.violet.text.light_yellow,
    mainBackground: themes.violet.background.main,
    screenBackground: themes.violet.background.toggle_keypad_screen,

    buttonText: themes.violet.text.light_yellow,

    keypadBackground: themes.violet.background.toggle_keypad_screen,

    keysBackground: themes.violet.keys.very_dark_violet.background,
    keysShadow: themes.violet.keys.very_dark_violet.shadow,

    deleteButtonTextColor: themes.violet.text.white,
    deleteButtonBackground: themes.violet.keys.dark_violet.background,
    deleteButtonShadow: themes.violet.keys.dark_violet.shadow,

    resultButtonTextColor: themes.violet.text.dark_blue,
    resultButtonBackground: themes.violet.keys.cyan.background,
    resultButtonShadow: themes.violet.keys.cyan.shadow,
  },
};
