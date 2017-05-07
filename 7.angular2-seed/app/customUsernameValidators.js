System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomUsernameValidators;
    return {
        setters: [],
        execute: function () {
            CustomUsernameValidators = (function () {
                function CustomUsernameValidators() {
                }
                //the Errow-Function-Expression or Lamda Expression
                //shortens a simple function body
                // from this
                // function(message){
                //     console.log(message);
                // }
                //to this
                // (message) => {       // the => is the fat arrow or the arrow keyword
                //     console.log(message);
                // }
                //also if there is only one parameter then get rid of the parenthesis
                // message => {
                //     console.log(message);
                // }
                //then everything on the same line as
                // message => { console.log(message); }
                //this is the real Arrow Function Expression or a Lamda Expression
                // left side contains the parameters and
                // right side contains the function body
                //now the constructor for the Promise() function looks like:
                //executor: (resolve: (value?: T | PromiseLike<T>) => void,
                //reject: (reason?: any) => void) => void
                //the resolve is either a value or another promise and return void
                //the reject is of the type of an optional parameter indicated by ? and also returns void
                // to simplify we can have
                // executor: (resolve, reject) = > void
                //******************//
                // the resolve and reject parameter function is the type of the executor parameter
                // of the constructor of the Promise class
                //******************//
                CustomUsernameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "Noor") {
                                resolve({ shouldBeUnique: true });
                            }
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                CustomUsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { cannotContainSpace: true };
                    }
                    return null;
                };
                return CustomUsernameValidators;
            }());
            exports_1("CustomUsernameValidators", CustomUsernameValidators);
        }
    };
});
//# sourceMappingURL=customUsernameValidators.js.map