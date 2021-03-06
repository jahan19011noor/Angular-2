System.register(["angular2/core", "angular2/common"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, SignupFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            SignupFormComponent = (function () {
                function SignupFormComponent() {
                    //the ControlGroup object creation way of validation
                    this.form = new common_1.ControlGroup({
                        username: new common_1.Control('', common_1.Validators.required),
                        password: new common_1.Control('', common_1.Validators.required)
                    });
                }
                //the ControlGroup object creation way of validation
                SignupFormComponent.prototype.signup = function () {
                    console.log(this.form.value);
                };
                return SignupFormComponent;
            }());
            SignupFormComponent = __decorate([
                core_1.Component({
                    selector: 'sign-up-form',
                    templateUrl: 'app/signup-form.component.html'
                })
            ], SignupFormComponent);
            exports_1("SignupFormComponent", SignupFormComponent);
        }
    };
});
//# sourceMappingURL=signup-form.component.js.map