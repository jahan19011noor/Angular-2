System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SwitchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SwitchComponent = (function () {
                function SwitchComponent() {
                    this.viewMode = 'map';
                }
                return SwitchComponent;
            }());
            SwitchComponent = __decorate([
                core_1.Component({
                    selector: 'ng-switch',
                    template: "\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a class=\"btn\" (click)=\"viewMode = 'map'\">Map Veiw</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a class=\"btn\" (click)=\"viewMode = 'list'\">List Veiw</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n        </div>\n    "
                })
            ], SwitchComponent);
            exports_1("SwitchComponent", SwitchComponent);
        }
    };
});
//# sourceMappingURL=switch.component.js.map