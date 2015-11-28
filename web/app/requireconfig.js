require.config({
    // alias libraries paths
  paths: {
    'angular':       'scripts/angular/angular'
  },
  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  baseUrl: "/app"
});

require(["angular"], function() {
  require(['testmodule'], function () {
    var angular = require("angular");
    angular.bootstrap(document, ["testModule"]);
  });
});