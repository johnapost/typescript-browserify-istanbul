module.exports = function(config) {
  var istanbul = require('browserify-istanbul');
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],
    files: [
      './generated/test/**/*.js',
      './generated/src/**/*.js'
    ],
    preprocessors: {
      './generated/test/**/*.js': ['browserify'],
      './generated/src/**/*.js': ['browserify']
    },
    browserify: {
      transform: [
        istanbul
      ]
    },
    browsers: [
      'Chrome'
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'json',
      dir: './generated',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    },
    singleRun: true
  });
};
