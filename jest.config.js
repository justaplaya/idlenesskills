const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ['**/tests/*.js?(x)'],
};
const jestConfig = {
  verbose: true,
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/tests/*.js?(x)'],
}

module.exports = jestConfig
module.exports = createJestConfig(customJestConfig);