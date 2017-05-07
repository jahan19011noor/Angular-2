import {Component} from 'angular2/core'
import {SignupFormComponent} from "./signup-form.component";
import {FormBuilderComponent} from "./form-builder.component";
import {AsyncValidatorComponent} from "./async-validator.component";

@Component({
    selector: 'sign-up',
    // directives: [SignupFormComponent],
    // directives: [FormBuilderComponent],
    directives: [AsyncValidatorComponent],
    template: `
        <sign-up-form></sign-up-form>
    `
})
export class SignupComponent {

    //up to tutorial number 59
}