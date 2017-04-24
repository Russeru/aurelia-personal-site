var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        '[*.js]',
        '*.html!text',
        '*.css!text'        
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/vendor-build": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'npm:aurelia-templating-binding@1.3.0',
        'npm:aurelia-templating-resources@1.4.0',
        'npm:aurelia-templating-router@1.1.0',
        'npm:aurelia-loader-default@1.0.2',
        'npm:aurelia-history-browser@1.0.0',
        'npm:aurelia-logging-console@1.0.0',
        'bootstrap/css/bootstrap.css!text'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
