module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/tests"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  //Include module directories
  moduleDirectories: ["node_modules", "src", "tests"],
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest

  setupFilesAfterEnv: [
    "@testing-library/react/dont-cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/extends/global.d.ts"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `tests` and filename
  // should contain `test` or `spec`.
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "d.ts"],

  // Module name mappers
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  },

  //Ignore specific paths
  modulePathIgnorePatterns: ["<rootDir>/tests/utils.ts"],
  snapshotSerializers: [ '@emotion/jest/serializer' ]
};