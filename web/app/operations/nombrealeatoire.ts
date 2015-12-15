/// <reference path="../../typings/angularjs/angular.d.ts" />
import {ControllerOperation, IOperationNumber} from "operations/operation";

export class ControllerNombreAleatoire implements IOperationNumber {
    public minstr: string;
    public maxstr: string;
    
    private min: number;
    private max: number;
    
    public nombre: number;
    
    public constructor() {
        this.reset();
    }
    
    public getValue(): number {
        return this.nombre;
    }
    
    public reset(): void {
        if (this.minstr == null) {
            this.minstr = "0";
        }
        
        this.min = parseInt(this.minstr);
        this.max = parseInt(this.maxstr);
        
        var r: number = Math.random() * (this.max - this.min);
        this.nombre = this.min + Math.round(r);
    }
}

export const CONTROLLER_NAME: string = "sdoControleurNombreAleatoire";
export const CONTROLLER_CONSTRUCTOR: any[] = [ControllerNombreAleatoire];

class DirectiveNombreAleatoire implements ng.IDirective {
    restrict: string = "E";
    require: any = "^sdoOperation";
    controller: any = CONTROLLER_CONSTRUCTOR;
    scope: any = {};
    controllerAs: string = "ctrl";
    bindToController: any = {
        minstr: "@?min",
        maxstr: "@max"
    };
    link: ng.IDirectiveLinkFn = (scope, element, attrs, controller) => {
        var ctrlOp: ControllerOperation = <ControllerOperation>controller;
        var ctrl: ControllerNombreAleatoire = element.controller(DIRECTIVE_NAME);
        ctrlOp.addNumber(ctrl);
    };
}

export const DIRECTIVE_NAME: string = "sdoNombreAleatoire";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectiveNombreAleatoire()];