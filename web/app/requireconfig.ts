/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

require.config({
    // alias libraries paths
    paths: {
        'angular': 'scripts/angular/angular'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    baseUrl: "/app"
});

require(["angular"], () => {
    require(['testmodule'], () => {
        var angular: ng.IAngularStatic = require("angular");
        angular.bootstrap(document, ["testModule"]);
    });
});