/// <reference path="../../typings/angularjs/angular.d.ts" />
import {ControllerNumPad} from "pad/numpad";

export class ControllerPadNombre {
    public nombre: number;
    public numPad: ControllerNumPad;

    public constructor(private $scope: ng.IScope) {

    }

    public keyPress(): void {
        this.$scope.$emit("NUMPAD", this.nombre);
        this.numPad.keyPress(this.nombre);
    }
}

export const CONTROLLER_NAME: string = "sdoControleurPadNombre";
export const CONTROLLER_CONSTRUCTOR: any[] = ["$scope", ControllerPadNombre];

class DirectivePadNombre implements ng.IDirective {
    private ctrlNumPad: ControllerNumPad;

    restrict: string = "E";
    require: any = [DIRECTIVE_NAME, "^^sdoNumPad"];
    template: string = `<button type="button" class="btn btn-default btn-lg" ng-click="ctrl.keyPress()">{{::ctrl.nombre}}</button>`;
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: any = {
        nombre: "@valeur"
    };

    link: ng.IDirectiveLinkFn = (scope, element, attrs, controllers) => {
        (<ControllerPadNombre>controllers[0]).numPad = controllers[1];
    };
}

export const DIRECTIVE_NAME: string = "sdoPadNombre";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectivePadNombre()];