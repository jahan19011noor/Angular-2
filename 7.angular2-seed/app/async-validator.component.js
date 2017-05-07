System.register(["angular2/core", "angular2/common", "./customUsernameValidators"], function (exports_1, context_1) {
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
    var core_1, common_1, customUsernameValidators_1, AsyncValidatorComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customUsernameValidators_1_1) {
                customUsernameValidators_1 = customUsernameValidators_1_1;
            }
        ],
        execute: function () {
            AsyncValidatorComponent = (function () {
                function AsyncValidatorComponent(fb) {
                    this.form = fb.group({
                        // username: ['', Validators.required],
                        // to use the custom validator class for username
                        // need to compose the built-in Validator and the static function at the custom class
                        // so use the compose() method
                        username: [
                            '',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                customUsernameValidators_1.CustomUsernameValidators.cannotContainSpace
                            ]),
                            customUsernameValidators_1.CustomUsernameValidators.shouldBeUnique //async validators
                        ],
                        password: ['', common_1.Validators.required]
                    });
                }
                //the FormBuilder type object passing to the Constructor of the ControlGroup
                //is another way
                AsyncValidatorComponent.prototype.signup = function () {
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                    console.log(this.form.value);
                };
                return AsyncValidatorComponent;
            }());
            AsyncValidatorComponent = __decorate([
                core_1.Component({
                    selector: 'sign-up-form',
                    templateUrl: 'app/async-validator.component.html'
                }),
                __metadata("design:paramtypes", [common_1.FormBuilder])
            ], AsyncValidatorComponent);
            exports_1("AsyncValidatorComponent", AsyncValidatorComponent);
        }
    };
});
//# sourceMappingURL=async-validator.component.js.map