System.register(["angular2/platform/browser", "./signup.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, signup_component_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(signup_component_1.SignupComponent);
        }
    };
});
//# sourceMappingURL=boot.js.map