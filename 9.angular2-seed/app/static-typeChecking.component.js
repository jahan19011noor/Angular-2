//Following are the life cycle hooks of a component
//to use them we need to implement their interfaces into the component
//each interface has a method that has to be added to the component
System.register(["angular2/core", "./post.service", "angular2/http"], function (exports_1, context_1) {
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
    var core_1, post_service_1, http_1, StaticTypeCheckingComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {//Following are the life cycle hooks of a component
            //to use them we need to implement their interfaces into the component
            //each interface has a method that has to be added to the component
            StaticTypeCheckingComponent = (function () {
                function StaticTypeCheckingComponent(_postService) {
                    // this._postService.createPost(1);
                    //the create post takes any type of parameter.
                    //if a var has no type then it is set to type any in typescript
                    // so we need to restrict the parameter type
                    this._postService = _postService;
                    //so set the type using type annotation
                    //have to do it in a seperate file
                    this._postService.createPost({
                        userId: 1,
                        title: 'a',
                        body: 'b'
                    });
                }
                StaticTypeCheckingComponent.prototype.ngOnInit = function () {
                    //this is the method of OnInit that we are implementing and overriding
                    //the name has been prefixed with ng as in case of all other methods there
                    //Method is called when the component is instantiated
                    //so it is at the position "After the Constructor" in the life cycle
                    //best practice to start work over here rather than in the constructor
                    //so more the constructor code here
                    this._postService.getPosts()
                        .subscribe(function (posts) { return console.log(posts[0].body); }); //after we can use indexing on posts[]
                };
                return StaticTypeCheckingComponent;
            }());
            StaticTypeCheckingComponent = __decorate([
                core_1.Component({
                    selector: 'static-type-checking',
                    template: "",
                    providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [post_service_1.PostService])
            ], StaticTypeCheckingComponent);
            exports_1("StaticTypeCheckingComponent", StaticTypeCheckingComponent);
        }
    };
});
//# sourceMappingURL=static-typeChecking.component.js.map