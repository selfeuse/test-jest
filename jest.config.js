module.exports = {
  preset: "ts-jest",
  // testEnvironment: 'node',
  testEnvironment: "jsdom",
  verbose: false,
  testMatch: ["**/src/**/*.test.(ts|js)?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
  },
  resolver: '<rootDir>/myResolver.js',
};
