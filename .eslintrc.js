module.exports = {
  extends: 'airbnb-base',
  rules: {
    'linebreak-style': 0,
    'no-unused-vars': [
      'warn',
      {
        vars: 'local',
        args: 'none'
      }
    ],
    'func-names': ['error', 'never'],
    'no-console': 0,
  },
};
