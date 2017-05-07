System.register(["angular2/core", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, Rx_1, TransformingObservableComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            TransformingObservableComponent = (function () {
                function TransformingObservableComponent() {
                    var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; }) //maps the event object Observable to another object Observable
                        .filter(function (text) { return text.length > 3; })
                        .debounceTime(400) //waites for 400ms before returning the object
                        .distinctUntilChanged() //insures event is not called on duplicate
                        .map(function (searchTerm) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                        var promise = $.getJSON(url); // we get a promise from the ajax call
                        return Rx_1.Observable.fromPromise(promise); //then create an observable from the promise
                    });
                    keyups.subscribe(function (data) { return console.log(data); });
                }
                return TransformingObservableComponent;
            }());
            TransformingObservableComponent = __decorate([
                core_1.Component({
                    selector: 'transform-observable',
                    template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search Artists\">\n    "
                }),
                __metadata("design:paramtypes", [])
            ], TransformingObservableComponent);
            exports_1("TransformingObservableComponent", TransformingObservableComponent);
        }
    };
});
//# sourceMappingURL=transforming-observable.component.js.map