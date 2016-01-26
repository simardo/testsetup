/// <reference path="../../typings/angularjs/angular.d.ts" />
import {ControllerOperation} from "operations/operation";

export class ControllerNumPad {
    public ctrlOp: ControllerOperation;

    public constructor() {

    }

    public keyPress(valeur: number): void {
        this.ctrlOp.keyPress(valeur);
    }
}

export const CONTROLLER_NAME: string = "sdoControleurNumPad";
export const CONTROLLER_CONSTRUCTOR: any[] = [ControllerNumPad];

class DirectiveNumPad implements ng.IDirective {
    restrict: string = "E";
    require: any = [DIRECTIVE_NAME, "^^sdoOperation"];
    templateUrl: string = "/app/pad/numpad.html";
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: boolean = true;

    link: ng.IDirectiveLinkFn = (scope, element, attrs, controllers) => {
        (<ControllerNumPad>controllers[0]).ctrlOp = controllers[1];
    };
}

export const DIRECTIVE_NAME: string = "sdoNumPad";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectiveNumPad()];