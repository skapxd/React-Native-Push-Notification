module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-new': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
