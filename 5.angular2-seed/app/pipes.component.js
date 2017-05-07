System.register(["angular2/core", "./custom.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, custom_pipe_1, PipesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (custom_pipe_1_1) {
                custom_pipe_1 = custom_pipe_1_1;
            }
        ],
        execute: function () {
            PipesComponent = (function () {
                function PipesComponent() {
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9999,
                        students: 55555,
                        price: 99.87,
                        releaseDate: new Date(2017, 3, 1)
                    };
                    this.post = {
                        title: "Angular Tutorial for Beginners",
                        body: "\n            This is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for Beginners\n        "
                    };
                }
                return PipesComponent;
            }());
            PipesComponent = __decorate([
                core_1.Component({
                    selector: 'pipes',
                    template: "\n        {{ course.title | uppercase | lowercase}}\n        <br/>\n        {{ course.students | number }}\n        <br/>\n        {{ course.rating | number:'3.2-3' }}\n        <br/>\n        {{ course.price | currency:'AUD':true:'2.2-2' }}\n        <br/>\n        {{ course.releaseDate | date:'YYYY MMM DD'}}\n        <br/>\n        {{ course | json }}\n        <br/><br/><br/>\n        {{ post.title }}\n        <br/>\n        {{ post.body | summary }}\n    ",
                    pipes: [custom_pipe_1.CustomPipe]
                })
            ], PipesComponent);
            exports_1("PipesComponent", PipesComponent);
        }
    };
});
//# sourceMappingURL=pipes.component.js.map