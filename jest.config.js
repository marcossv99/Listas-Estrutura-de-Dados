module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
      "<rootDir>/src/"
    ],
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/*.(spec|test).[tj]s?(x)"
    ],
    collectCoverage: false
  };