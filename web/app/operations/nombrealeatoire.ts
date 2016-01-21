/// <reference path="../../typings/angularjs/angular.d.ts" />
import {ControllerOperation, IOperationNumber} from "operations/operation";

export class ControllerNombreAleatoire implements IOperationNumber {
    public minstr: string;
    public maxstr: string;

    private min: number;
    private max: number;
    private ruban: Array<number>;

    public nombre: number;

    public constructor() {
        if (this.minstr == null) {
            this.minstr = "0";
        }

        this.min = parseInt(this.minstr);
        this.max = parseInt(this.maxstr);

        this.ruban = new Array<number>();

        this.reset();
    }

    public getValue(): number {
        return this.nombre;
    }

    public reset(): void {
        if (this.ruban.length == 0) {
            this.resetRuban();
        }
        var r: number = Math.random() * (this.ruban.length - 1);
        var index: number = Math.round(r);
        this.nombre = this.min + this.ruban[index];
        this.ruban = this.ruban.filter((value, i) => i != index);
        console.log(this.ruban, index);
    }

    private resetRuban(): void {
        for (var i = this.min; i <= this.max; i++) {
            this.ruban.push(i);
        }
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