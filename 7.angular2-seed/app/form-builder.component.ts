import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common";
import {CustomUsernameValidators} from './customUsernameValidators'

@Component({
    selector: 'sign-up-form',
    templateUrl: 'app/form-builder.component.html'
})

export class FormBuilderComponent {
    //the ControlGroup object creation way of validation
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // })
    //the ControlGroup object creation way of validation

    //the FormBuilder type object passing to the Constructor of the ControlGroup
    //is another way
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            // username: ['', Validators.required],
            // to use the custom validator class for username
                // need to compose the built-in Validator and the static function at the custom class
            // so use the compose() method
            username: [
                '',     //default value for the field
                Validators.compose([    //custom validators composed with built-in validators
                    Validators.required,
                    CustomUsernameValidators.cannotContainSpace
                ]),
                CustomUsernameValidators.shouldBeUnique     //async validators
            ],
            password: ['', Validators.required]
        })
    }
    //the FormBuilder type object passing to the Constructor of the ControlGroup
    //is another way

    signup(){
        console.log(this.form.value);
    }
}