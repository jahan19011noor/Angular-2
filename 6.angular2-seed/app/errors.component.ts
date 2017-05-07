import {Component} from 'angular2/core';
import {ValidationErrorsComponent} from "./validation-errors.component";

@Component({
    selector: 'errors',
    directives: [ValidationErrorsComponent],
    template: `
        <validation-form></validation-form>
    `
})
export class ErrorsComponent {

    //up to tutorial number 59
}