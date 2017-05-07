System.register(["angular2/core", "rxjs/Observable", "rxjs/add/operator/debounceTime", "rxjs/add/operator/filter"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Observable_1, StripDownObservableComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            StripDownObservableComponent = (function () {
                function StripDownObservableComponent() {
                    console.log(new Observable_1.Observable());
                }
                return StripDownObservableComponent;
            }());
            StripDownObservableComponent = __decorate([
                core_1.Component({
                    selector: 'strip-down',
                    template: ""
                }),
                __metadata("design:paramtypes", [])
            ], StripDownObservableComponent);
            exports_1("StripDownObservableComponent", StripDownObservableComponent);
        }
    };
});
//# sourceMappingURL=strip-downObservable.component.js.map