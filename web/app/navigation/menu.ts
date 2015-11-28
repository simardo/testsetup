/// <reference path="../../typings/angularjs/angular.d.ts" />

class MenuDirective implements ng.IDirective {
    template: string = "<div>coucou</div>"
}

export const DIRECTIVE_NAME: string = "testMenu";
export const DIRECTIVE_FUNCTION: any[] = [() => new MenuDirective()];