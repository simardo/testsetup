/// <reference path="../../typings/angularjs/angular.d.ts" />

export class ControllerNumPad {

    public constructor() {

    }
}

export const CONTROLLER_NAME: string = "sdoControleurNumPad";
export const CONTROLLER_CONSTRUCTOR: any[] = [ControllerNumPad];

class DirectiveNumPad implements ng.IDirective {
    restrict: string = "E";
    templateUrl: string = "/app/pad/numpad.html";
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: boolean = true;
}

export const DIRECTIVE_NAME: string = "sdoNumPad";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectiveNumPad()];