System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ForComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ForComponent = (function () {
                function ForComponent() {
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                }
                return ForComponent;
            }());
            ForComponent = __decorate([
                core_1.Component({
                    selector: 'ng-for',
                    template: "\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n                <!--//#course denotes a local variable called #course-->\n                <!--//which generates another local variable index-->\n                <!--//which can be accessed by another #var called #i-->\n                <!--//and displayed with interpolations-->\n                <!--//essentially #course grabs an index of courses-->\n                {{ i + 1 }} - {{ course }}\n            </li>\n            <!--//the *before ngFor denotes the li/DOM element concerned is a template-->\n            <!--//which has to be repeated until the condition is false-->\n            <!--//if not used we have to do the following-->\n            <template ngFor [ngForOf]=\"courses\" #course #i=index>\n                <li>{{ i+1 }} - {{ course }}</li>\n            </template>\n            <!--//so we are doing all that * could do menually-->\n        </ul>\n    "
                })
            ], ForComponent);
            exports_1("ForComponent", ForComponent);
        }
    };
});
//# sourceMappingURL=for.component.js.map