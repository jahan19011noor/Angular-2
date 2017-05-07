System.register(["angular2/core", "angular2/router"], function (exports_1, context_1) {
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
    var core_1, router_1, ContactComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                }
                ContactComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                    this._router.navigate(['Albums']); //Imperative navigation
                };
                ContactComponent.prototype.routerCanDeactivate = function (next, previous) {
                    // console.log("next", next);              //checking
                    // console.log("previous", previous);      //checking
                    //implementing dirty checking
                    // if (this.form.dirty)
                    return confirm("Are you sure?");
                };
                return ContactComponent;
            }());
            ContactComponent = __decorate([
                core_1.Component({
                    templateUrl: '/app/contact.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], ContactComponent);
            exports_1("ContactComponent", ContactComponent);
            // import {Component} from 'angular2/core';
            // import {Router} from 'angular2/router';
            //
            // @Component({
            //     templateUrl: '/app/contact.component.html'
            // })
            // export class ContactComponent {
            //     constructor(private _router: Router){
            //
            //     }
            //
            //     onSubmit(form){
            //         console.log(form);
            //         this._router.navigate(['Albums']);      //Imperative navigation
            //     }
            // } 
        }
    };
});
//# sourceMappingURL=contact.component.js.map