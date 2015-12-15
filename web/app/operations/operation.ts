/// <reference path="../../typings/angularjs/angular.d.ts" />

export interface IOperationNumber {
    getValue(): number;
    reset(): void;
}

export class ControllerOperation {
    public type: string;
    public numbers: IOperationNumber[] = [];
    public reponse: string;

    public constructor() {
    }

    public addNumber(value: IOperationNumber): void {
        this.numbers.push(value);
    }

    public submit(): void {
        var res: number;
        switch (this.type) {
            case "addition": {
                var nums: number[] = this.numbers.map(v => v.getValue());
                res = nums.reduce((p, c) => p + c, 0);
            }
        }
        if (parseInt(this.reponse) == res) {
            this.reponse = "";
            this.numbers.forEach(value => value.reset());
        }
    }
}

export const CONTROLLER_NAME: string = "sdoControleurOperation";
export const CONTROLLER_CONSTRUCTOR: any[] = [ControllerOperation];

class DirectiveOperation implements ng.IDirective {
    restrict: string = "E";
    templateUrl: string = "/app/operations/operation.html";
    controller: any = CONTROLLER_NAME;
    controllerAs: string = "ctrl";
    scope: any = {};
    transclude: boolean = true;
    bindToController: any = {
        type: "@"
    }
}

export const DIRECTIVE_NAME: string = "sdoOperation";
export const DIRECTIVE_FUNCTION: any[] = [() => new DirectiveOperation()];