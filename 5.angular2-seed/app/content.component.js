System.register(["angular2/core", "./bootstrap.panel.component"], function (exports_1, context_1) {
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
    var core_1, bootstrap_panel_component_1, ContentComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            }
        ],
        execute: function () {
            ContentComponent = (function () {
                // inserting content of another component into the template of this component
                function ContentComponent() {
                    this.headcontent = "this is the heading";
                    this.bodycontent = "This is the body content";
                }
                return ContentComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ContentComponent.prototype, "headcontent", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ContentComponent.prototype, "bodycontent", void 0);
            ContentComponent = __decorate([
                core_1.Component({
                    selector: 'content',
                    template: "\n        <h3>Bootstrap Panel template or DOM Element imported from bootstrap.panel.component</h3>\n        <bootstrap-panel [header]=\"headcontent\" [bodytext]=\"bodycontent\">\n            // problem data binding not happening\n            <div class=\"heading\">This is the heading</div>\n            <div class=\"body\">this is the body</div>\n            <div class=\"body\">this is the body</div>\n            <!--both body placed into one div the body div of the panel-->\n        </bootstrap-panel>\n    ",
                    directives: [bootstrap_panel_component_1.BootstrapPanelComponent]
                })
            ], ContentComponent);
            exports_1("ContentComponent", ContentComponent);
        }
    };
});
//# sourceMappingURL=content.component.js.map