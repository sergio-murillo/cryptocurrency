module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleDirectories: ["node_modules", 'src'],
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/react/dont-cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/extends/global.d.ts"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "d.ts"],

  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  },

  snapshotSerializers: [ '@emotion/jest/serializer' ]
};