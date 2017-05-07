System.register(["angular2/platform/browser", "./strip-downObservable.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, strip_downObservable_component_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (strip_downObservable_component_1_1) {
                strip_downObservable_component_1 = strip_downObservable_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(strip_downObservable_component_1.StripDownObservableComponent);
            // import {ObservableComponent} from './observable.component'
            // bootstrap(ObservableComponent);
            // import {ImportOperatorComponent} from './import-operator.component'
            // bootstrap(ImportOperatorComponent); 
        }
    };
});
//# sourceMappingURL=boot.js.map