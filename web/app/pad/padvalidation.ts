/// <reference path="../../typings/angularjs/angular.d.ts" />

export class ControllerPadValidation {

    public constructor(private $scope: ng.IScope) {

    }

    public keyPress(): void {
        this.$scope.$emit("NUMPAD_VALIDATE");
    }
}

export const CONTROLLER_NAME: string = "sdoControleurPadValidation";
export const CONTROLLER_CONSTRUCTOR: any[] = ["$scope", ControllerPadValidation];

class DirectivePadValidation implements ng.IDirective {
    restrict: string = "E";
    template: string = `<button type="button" class="btn btn-default btn-lg" ng-click="ctrl.keyPress()">=</button>`;
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    bindToController: boolean = true;
}

export const DIRECTIVE_NAME: string = "sdoPadValidation";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectivePadValidation()];