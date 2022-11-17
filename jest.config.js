module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};