System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, IfComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            IfComponent = (function () {
                //two ways of controlling display of DOM elements
                // ngIf directive
                // hidden property
                function IfComponent() {
                    this.courses = [];
                }
                return IfComponent;
            }());
            IfComponent = __decorate([
                core_1.Component({
                    selector: 'ng-if',
                    // ngIf directive destroyes the DOM element if the condition is false
                    // template: `
                    //     <div *ngIf="courses > 0">
                    //         List of Courses
                    //     </div>
                    //     <div *ngIf="courses == 0">
                    //         You don't have any courses listed yet.
                    //     </div>
                    // `
                    // ngIf directive destroyes the DOM element if the condition is false
                    // hidden property hides the DOM element if the condition is false
                    template: "\n        <div [hidden]=\"courses == 0\">\n            List of Courses\n        </div>\n        <div [hidden]=\"courses > 0\">\n            You don't have any courses listed yet.\n        </div>\n    "
                    // hidden property hides the DOM element if the condition is false
                })
            ], IfComponent);
            exports_1("IfComponent", IfComponent);
        }
    };
});
//# sourceMappingURL=if.component.js.map