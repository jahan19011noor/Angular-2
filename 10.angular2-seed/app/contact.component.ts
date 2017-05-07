import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){

    }

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);      //Imperative navigation
    }

    routerCanDeactivate(next, previous){        //Overriding method in the CanDeactivate class
        // console.log("next", next);              //checking
        // console.log("previous", previous);      //checking
        //implementing dirty checking
        // if (this.form.dirty)
        return confirm("Are you sure?");
    }
}

// import {Component} from 'angular2/core';
// import {Router} from 'angular2/router';
//
// @Component({
//     templateUrl: '/app/contact.component.html'
// })
// export class ContactComponent {
//     constructor(private _router: Router){
//
//     }
//
//     onSubmit(form){
//         console.log(form);
//         this._router.navigate(['Albums']);      //Imperative navigation
//     }
// }