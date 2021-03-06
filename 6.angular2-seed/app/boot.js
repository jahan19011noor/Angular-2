System.register(["angular2/platform/browser", "./exercise.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, exercise_component_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (exercise_component_1_1) {
                exercise_component_1 = exercise_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(exercise_component_1.ExerciseComponent);
        }
    };
});
//# sourceMappingURL=boot.js.map