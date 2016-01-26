/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

require.config({
    // alias libraries paths
    paths: {
        "angular": "scripts/angular/angular",
        "angulartouch": "scripts/angular-touch/angular-touch",
        "jquery": "scripts/jquery/dist/jquery",
        "bootstrap": "scripts/bootstrap/dist/js/bootstrap"
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angulartouch': {
            deps: ['angular']
        }
    },
    baseUrl: "/app"
});

require(["angular", "angulartouch", "jquery", "bootstrap"], () => {
    require(["testmodule"], () => {
        angular.bootstrap(document, ["testModule"]);
    });
});