/// <reference path="../../typings/angularjs/angular.d.ts" />

export interface IOperationNumber {
    getValue(): number;
    reset(errorCount: number): void;
}

export class ControllerOperation {
    public type: string;
    public numbers: IOperationNumber[] = [];
    public reponse: string = "";
    public resultat: number = 0;
    public solution: number = null;

    private errorCount: number = 0;

    public constructor(private $scope: ng.IScope, private $timeout: ng.ITimeoutService) {
        //this.$scope.$on("NUMPAD", (event: ng.IAngularEvent, valeur: number) => this.keyPress(valeur));
        this.$scope.$on("NUMPAD_CLEAR", (event: ng.IAngularEvent) => this.reponse = "");
        this.$scope.$on("NUMPAD_VALIDATE", (event: ng.IAngularEvent) => this.submit());
    }

    public addNumber(value: IOperationNumber): void {
        this.numbers.push(value);
    }

    public getOperateur(): string {
        var res: string;
        switch (this.type) {
            case "addition":
                res = "+";
                break;
            case "multiplication":
                res = "x";
                break;
        }
        return res;
    }

    public submit(): void {
        var res: number;
        var nums: number[] = this.numbers.map(v => v.getValue());
        switch (this.type) {
            case "addition":
                res = nums.reduce((p, c) => p + c, 0);
                break;
            case "multiplication":
                res = nums.reduce((p, c) => p * c, 1);
                break;
        }
        if (parseInt(this.reponse) == res) {
            this.resultat = 1;
            this.reset(750);
        } else {
            this.resultat = -1;
            this.errorCount += 1;
            if (this.errorCount == 2) {
                this.solution = res;
                this.reset(3000);
            }
        }
    }

    private reset(delai: number): void {
        this.$timeout(() => {
            this.solution = null;
            this.reponse = "";
            this.resultat = 0;
            this.numbers.forEach(value => value.reset(this.errorCount));
            this.errorCount = 0;
        }, delai);
    }

    public keyPress(valeur: number): void {
        if (this.resultat == -1) {
            this.resultat = 0;
            this.reponse = "";
        }
        this.reponse += valeur.toString();
    }
}

export const CONTROLLER_NAME: string = "sdoControleurOperation";
export const CONTROLLER_CONSTRUCTOR: any[] = ["$scope", "$timeout", ControllerOperation];

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