System.register(["angular2/core", "angular2/router", "./albums.component", "./contact.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, albums_component_1, contact_component_1, RouterOutletComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }
        ],
        execute: function () {
            RouterOutletComponent = (function () {
                function RouterOutletComponent() {
                }
                return RouterOutletComponent;
            }());
            RouterOutletComponent = __decorate([
                router_1.RouteConfig([
                    { path: '/albums', name: 'Albums', component: albums_component_1.AlbumsComponent, useAsDefault: true },
                    { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent },
                    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
                ]),
                core_1.Component({
                    selector: 'router-outlet',
                    templateUrl: '/app/app.component.html',
                    directives: [router_1.RouterOutlet]
                })
            ], RouterOutletComponent);
            exports_1("RouterOutletComponent", RouterOutletComponent);
        }
    };
});
//# sourceMappingURL=router-outlet.component.js.map