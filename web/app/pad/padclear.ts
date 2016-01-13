/// <reference path="../../typings/angularjs/angular.d.ts" />

export class ControllerPadClear {

    public constructor(private $scope: ng.IScope) {

    }

    public keyPress(): void {
        this.$scope.$emit("NUMPAD_CLEAR");
    }
}

export const CONTROLLER_NAME: string = "sdoControleurPadClear";
export const CONTROLLER_CONSTRUCTOR: any[] = ["$scope", ControllerPadClear];

class DirectivePadClear implements ng.IDirective {
    restrict: string = "E";
    template: string = `<button type="button" class="btn btn-default btn-lg" ng-click="ctrl.keyPress()">C</button>`;
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: boolean = true;
}

export const DIRECTIVE_NAME: string = "sdoPadClear";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectivePadClear()];