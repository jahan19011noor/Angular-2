System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, EnablingRoutingComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            // 3 steps to enable routing
            // 1. Include router.dev.js in index.html
            // 2. set the base url for the angular app
            //angular uses this to compose related urls
            // in index.html put
            //<base href="/">       as it is the root file
            //in html for admin page it will be "/admin/" as all other pages will followed afterwards
            // 3. Register router providers in the bootstrap to avoid registering in all components
            EnablingRoutingComponent = (function () {
                function EnablingRoutingComponent() {
                }
                return EnablingRoutingComponent;
            }());
            EnablingRoutingComponent = __decorate([
                core_1.Component({
                    selector: 'enable-routing',
                    templateUrl: '/app/app.component.html'
                })
                // 3 steps to enable routing
                // 1. Include router.dev.js in index.html
                // 2. set the base url for the angular app
                //angular uses this to compose related urls
                // in index.html put
                //<base href="/">       as it is the root file
                //in html for admin page it will be "/admin/" as all other pages will followed afterwards
                // 3. Register router providers in the bootstrap to avoid registering in all components
            ], EnablingRoutingComponent);
            exports_1("EnablingRoutingComponent", EnablingRoutingComponent);
        }
    };
});
//# sourceMappingURL=enabling-routing.component.js.map