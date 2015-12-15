/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

//var ng = require("angular");
import * as Menu from "navigation/menu";
import * as NombreAleatoire from "operations/nombrealeatoire";
import * as Nombre from "operations/nombre";
import * as Operation from "operations/operation";

const MODULE_NAME: string = "testModule";

var app: angular.IModule = angular.module(MODULE_NAME, []);

app.directive(Menu.DIRECTIVE_NAME, Menu.DIRECTIVE_FUNCTION);
app.directive(NombreAleatoire.DIRECTIVE_NAME, NombreAleatoire.DIRECTIVE_FUNCTION);
app.directive(Nombre.DIRECTIVE_NAME, Nombre.DIRECTIVE_FUNCTION);
app.directive(Operation.DIRECTIVE_NAME, Operation.DIRECTIVE_FUNCTION);

app.controller(NombreAleatoire.CONTROLLER_NAME, NombreAleatoire.CONTROLLER_CONSTRUCTOR);
app.controller(Nombre.CONTROLLER_NAME, Nombre.CONTROLLER_CONSTRUCTOR);
app.controller(Operation.CONTROLLER_NAME, Operation.CONTROLLER_CONSTRUCTOR);