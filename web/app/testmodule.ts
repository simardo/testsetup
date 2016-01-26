/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

//var ng = require("angular");
import * as Menu from "navigation/menu";
import * as NombreAleatoire from "operations/nombrealeatoire";
import * as Nombre from "operations/nombre";
import * as Operation from "operations/operation";
import * as PadNombre from "pad/padnombre";
import * as PadClear from "pad/padclear";
import * as PadValidation from "pad/padvalidation";
import * as NumPad from "pad/numpad";

const MODULE_NAME: string = "testModule";

var app: angular.IModule = angular.module(MODULE_NAME, ["ngTouch"]);

app.directive(Menu.DIRECTIVE_NAME, Menu.DIRECTIVE_FUNCTION);
app.directive(NombreAleatoire.DIRECTIVE_NAME, NombreAleatoire.DIRECTIVE_FUNCTION);
app.directive(Nombre.DIRECTIVE_NAME, Nombre.DIRECTIVE_FUNCTION);
app.directive(Operation.DIRECTIVE_NAME, Operation.DIRECTIVE_FUNCTION);
app.directive(PadNombre.DIRECTIVE_NAME, PadNombre.DIRECTIVE_FUNCTION);
app.directive(PadClear.DIRECTIVE_NAME, PadClear.DIRECTIVE_FUNCTION);
app.directive(PadValidation.DIRECTIVE_NAME, PadValidation.DIRECTIVE_FUNCTION);
app.directive(NumPad.DIRECTIVE_NAME, NumPad.DIRECTIVE_FUNCTION);

app.controller(NombreAleatoire.CONTROLLER_NAME, NombreAleatoire.CONTROLLER_CONSTRUCTOR);
app.controller(Nombre.CONTROLLER_NAME, Nombre.CONTROLLER_CONSTRUCTOR);
app.controller(Operation.CONTROLLER_NAME, Operation.CONTROLLER_CONSTRUCTOR);
app.controller(PadNombre.CONTROLLER_NAME, PadNombre.CONTROLLER_CONSTRUCTOR);
app.controller(PadClear.CONTROLLER_NAME, PadClear.CONTROLLER_CONSTRUCTOR);
app.controller(PadValidation.CONTROLLER_NAME, PadValidation.CONTROLLER_CONSTRUCTOR);
app.controller(NumPad.CONTROLLER_NAME, NumPad.CONTROLLER_CONSTRUCTOR);