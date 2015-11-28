/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

//var ng = require("angular");
import * as Menu from "navigation/menu";

const MODULE_NAME: string = "testModule";

var app: angular.IModule = angular.module(MODULE_NAME, []);

app.directive(Menu.DIRECTIVE_NAME, Menu.DIRECTIVE_FUNCTION);