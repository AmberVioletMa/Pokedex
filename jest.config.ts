import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
    '!**/vendor/**',
    '!src/bootstrap.tsx',
    '!src/App.tsx',
    '!src/**/*.styled.tsx',
    '!src/**/*.stories.tsx',
    '!src/animations/**',
    '!src/assets/**',
    '!src/loading_pokeball.gif',
  ],
  testMatch: [`${baseDir}/**/*.test.{ts,tsx}`, `${baseDir}/**/*.spec.{ts,tsx}`],
  moduleNameMapper: {
    '\\.(css|less|sass|scss|gif)$': 'identity-obj-proxy',
    '^.+\\.svg$': '<rootDir>/__mocks__/svgMock.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^remote/(.*)$': '<rootDir>/src/__mocks__/remote/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.ts',
    'index.tsx',
    '.prettierrc.ts',
    'babel.config.ts',
    '.stories',
    'main.tsx',
    'src/hooks',
    'src/providers',
    'src/queries',
    '\\.styled.ts$',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
