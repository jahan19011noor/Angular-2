System.register(["angular2/platform/browser", "./use-promise.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, use_promise_component_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (use_promise_component_1_1) {
                use_promise_component_1 = use_promise_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(use_promise_component_1.UsePromiseComponent);
        }
    };
});
//# sourceMappingURL=boot.js.map