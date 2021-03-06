System.register(["angular2/platform/browser", "angular2/router", "./route-params.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, route_params_component_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_params_component_1_1) {
                route_params_component_1 = route_params_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(route_params_component_1.RouteParamsComponent, [router_1.ROUTER_PROVIDERS]);
        }
    };
});
//# sourceMappingURL=boot.js.map