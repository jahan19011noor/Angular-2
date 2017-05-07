System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, VoteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.totalVotes = 10;
                    this.myVote = 0;
                }
                VoteComponent.prototype.onClickP = function () {
                    if (this.myVote == 0 || this.myVote == -1) {
                        this.totalVotes += 1;
                        this.myVote += 1;
                    }
                };
                VoteComponent.prototype.onClickN = function () {
                    if (this.myVote == 0 || this.myVote == 1) {
                        this.totalVotes -= 1;
                        this.myVote -= 1;
                    }
                };
                return VoteComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "totalVotes", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "myVote", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'vote',
                    template: "\n        <p><i class=\"glyphicon glyphicon-menu-up\" (click)=\"onClickP()\" [class.highlighted]=\"myVote == 1\"></i></p>\n        <p>{{ totalVotes }}</p>\n        <p><i class=\"glyphicon glyphicon-menu-down\" (click)=\"onClickN()\" [class.highlighted]=\"myVote == -1\"></i></p>\n    ",
                    styles: ["\n        .glyphicon-meny-up, .glyphicon-menu-down {\n            color: #ccc;\n            cursor: pointer;\n        }\n        .highlighted {\n            color: orange;\n        }\n    "]
                })
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    };
});
//# sourceMappingURL=vote.component.js.map