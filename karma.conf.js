module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai', 'source-map-support'],
    files: [
      'typings/tsd.d.ts',
      'test/**/*.ts',
      'src/**/*.ts'
    ],
    preprocessors: {
      'typings/tsd.d.ts': ['browserify'],
      'test/**/*.ts': ['browserify'],
      'src/**/*.ts': ['browserify']
    },
    browserify: {
      debug: true,
      plugin: ['tsify']
    },
    browsers: [
      'Chrome'
    ],
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },
    reporters: [
      'progress'
    ]
  });
};
