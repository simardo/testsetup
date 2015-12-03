/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

require.config({
    // alias libraries paths
    paths: {
        "angular": "scripts/angular/angular",
        "jquery": "scripts/jquery/dist/jquery",
        "bootstrap": "scripts/bootstrap/dist/js/bootstrap"
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    baseUrl: "/app"
});

require(["angular", "jquery", "bootstrap"], () => {
    require(["testmodule"], () => {
        angular.bootstrap(document, ["testModule"]);
    });
});