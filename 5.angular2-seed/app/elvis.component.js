System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ElvisComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ElvisComponent = (function () {
                function ElvisComponent() {
                    this.task = {
                        title: "Review Applications",
                        // suppose this
                        // assignee: {
                        //     name: 'Noor'
                        // }
                        // is changed to
                        assignee: {
                            name: null
                        }
                        // gives error because we are
                        // trying to access the name property of null
                        // task.assignee.name
                        // solutions might be
                        // using ngIf
                        // use a ternary operator in the interpolation
                        // use the elvis operator '?.'
                        // gives blank string if finds null
                    };
                }
                return ElvisComponent;
            }());
            ElvisComponent = __decorate([
                core_1.Component({
                    selector: 'elvis',
                    template: "\n        <ul>\n            <li>Title: {{ task.title }}</li>\n            <!--<li>Assigned to: {{ task.assignee.name }}</li>-->\n            <li>Assigned to: {{ task.assignee?.name }}</li>\n            <!--gives blank string if finds null-->\n        </ul>\n    "
                })
            ], ElvisComponent);
            exports_1("ElvisComponent", ElvisComponent);
        }
    };
});
//# sourceMappingURL=elvis.component.js.map