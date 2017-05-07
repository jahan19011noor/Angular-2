System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, FormExerciseComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FormExerciseComponent = (function () {
                function FormExerciseComponent() {
                }
                FormExerciseComponent.prototype.log = function (x) {
                    console.log(x);
                };
                FormExerciseComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                return FormExerciseComponent;
            }());
            FormExerciseComponent = __decorate([
                core_1.Component({
                    selector: 'exercise-form',
                    template: "        \n        <form class=\"container\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input\n                        ngControl=\"name\"\n                        type=\"text\"\n                        id=\"name\"\n                        class=\"form-control\"\n                        #name=\"ngForm\"\n                        (change)=\"log(name)\"\n                        required\n                        minlength=\"4\">\n                <div *ngIf=\"name.touched && name.errors\">\n                    <div\n                            class=\"alert alert-danger\"\n                            *ngIf=\"name.errors.required\">\n                        Name is required\n                    </div>\n                    <div\n                            class=\"alert alert-danger\"\n                            *ngIf=\"name.errors.minlength\">\n                        Name should be more than {{ name.errors.minlength.requiredLength }} characters.\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input\n                        ngControl=\"email\"\n                        type=\"email\"\n                        class=\"form-control\"\n                        id=\"email\"\n                        #email=\"ngForm\"\n                        (change)=\"log(email)\"\n                        required\n                        email>\n                <div *ngIf=\"email.touched && email.errors\">\n                    <div\n                            class=\"alert alert-danger\"\n                            *ngIf=\"email.errors.required\">\n                        Email is required\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"form-group\">\n                <label for=\"freq\">Frequency of Emails</label>\n                <select \n                        id=\"freq\" class=\"form-control\">\n                    <option value=\"volvo\">Daily</option>\n                    <option value=\"saab\">Weekly</option>\n                    <option value=\"mercedes\">Montly</option>\n                </select>\n            </div>\n            <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n        </form>\n    "
                })
            ], FormExerciseComponent);
            exports_1("FormExerciseComponent", FormExerciseComponent);
        }
    };
});
//# sourceMappingURL=form-exercise.component.js.map