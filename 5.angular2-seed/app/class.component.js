System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ClassComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ClassComponent = (function () {
                function ClassComponent() {
                    this.isFavorite = false;
                }
                ClassComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                };
                return ClassComponent;
            }());
            ClassComponent = __decorate([
                core_1.Component({
                    selector: 'ng-class',
                    template: "\n        <i class=\"glyphicon\"\n                [ngClass]=\"{\n                    'glyphicon-star-empty': !isFavorite,\n                    'glyphicon-star': isFavorite\n                }\"\n            (click)=\"onClick()\"\n        ></i>\n    "
                })
            ], ClassComponent);
            exports_1("ClassComponent", ClassComponent);
        }
    };
});
//# sourceMappingURL=class.component.js.map