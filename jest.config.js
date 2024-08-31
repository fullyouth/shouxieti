module.exports = async () => {
  return {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'reports/coverage',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node',
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './reports/html-report',
          filename: 'report.html',
        },
      ],
    ],
  };
};
