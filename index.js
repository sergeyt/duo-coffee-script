var coffee = require("gulp-coffee");
var gulp = require("duo-gulp");

module.exports = function(options) {
  return gulp("*.coffee", coffee)(options);
};
