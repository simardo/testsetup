/// <reference path="../../typings/angularjs/angular.d.ts" />

class MenuDirective implements ng.IDirective {
    templateUrl: string = "/app/navigation/menu.html";
}

export const DIRECTIVE_NAME: string = "testMenu";
export const DIRECTIVE_FUNCTION: any[] = [() => new MenuDirective()];