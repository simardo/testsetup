/// <reference path="../../typings/angularjs/angular.d.ts" />
import {ControllerOperation, IOperationNumber} from "operations/operation";

export class ControllerNombre implements IOperationNumber {
    public valeurstr: string;

    public constructor() { 
    }
    
    public getValue(): number {
        return parseInt(this.valeurstr);
    }
    
    public reset(errorCount: number): void {
        return;
    }
}

export const CONTROLLER_NAME: string = "sdoControleurNombre";
export const CONTROLLER_CONSTRUCTOR: any[] = [ControllerNombre];

class DirectiveNombre implements ng.IDirective {
    restrict: string = "E";
    require: any = "^^sdoOperation";
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: any = {
        valeurstr: "@?valeur"
    };
    link: ng.IDirectiveLinkFn = (scope, element, attrs, controller) => {
        var ctrlOp: ControllerOperation = <ControllerOperation>controller;
        var ctrl: ControllerNombre = element.controller(DIRECTIVE_NAME);
        ctrlOp.addNumber(ctrl);
    };
}

export const DIRECTIVE_NAME: string = "sdoNombre";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectiveNombre()];