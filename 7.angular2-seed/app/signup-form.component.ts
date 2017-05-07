import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators} from "angular2/common";

@Component({
    selector: 'sign-up-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent {
    //the ControlGroup object creation way of validation
    form = new ControlGroup({
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });
    //the ControlGroup object creation way of validation

    signup(){
        console.log(this.form.value)
    }
}