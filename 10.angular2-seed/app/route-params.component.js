System.register(["angular2/core", "angular2/router", "./albums.component", "./album.component", "./contact.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, albums_component_1, album_component_1, contact_component_1, RouteParamsComponent;
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
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }
        ],
        execute: function () {
            RouteParamsComponent = (function () {
                function RouteParamsComponent() {
                }
                return RouteParamsComponent;
            }());
            RouteParamsComponent = __decorate([
                router_1.RouteConfig([
                    { path: '/albums', name: 'Albums', component: albums_component_1.AlbumsComponent, useAsDefault: true },
                    { path: '/albums/:id', name: 'Album', component: album_component_1.AlbumComponent },
                    { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent },
                    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
                ]),
                core_1.Component({
                    selector: 'route-params',
                    templateUrl: '/app/app.component.html',
                    // directives: [RouterOutlet, RouterLink]
                    // following code is clearner
                    directives: [router_1.ROUTER_DIRECTIVES]
                })
            ], RouteParamsComponent);
            exports_1("RouteParamsComponent", RouteParamsComponent);
        }
    };
});
//# sourceMappingURL=route-params.component.js.map