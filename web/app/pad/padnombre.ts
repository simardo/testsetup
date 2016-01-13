/// <reference path="../../typings/angularjs/angular.d.ts" />

export class ControllerPadNombre {
    public nombre: number;

    public constructor(private $scope: ng.IScope) {

    }

    public keyPress(): void {
        this.$scope.$emit("NUMPAD", this.nombre);
    }
}

export const CONTROLLER_NAME: string = "sdoControleurPadNombre";
export const CONTROLLER_CONSTRUCTOR: any[] = ["$scope", ControllerPadNombre];

class DirectivePadNombre implements ng.IDirective {
    restrict: string = "E";
    template: string = `<button type="button" class="btn btn-default btn-lg" ng-click="ctrl.keyPress()">{{ctrl.nombre}}</button>`;
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: any = {
        nombre: "=valeur"
    };
}

export const DIRECTIVE_NAME: string = "sdoPadNombre";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectivePadNombre()];