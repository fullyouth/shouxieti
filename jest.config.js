module.exports = async () => {
  return {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node',
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './html-report',
          filename: 'report.html',
        },
      ],
    ],
  };
};
