import {Component} from 'angular2/core';

@Component({
    selector: 'validation-form',
    templateUrl: 'app/validation-errors.component.html'
})
export class ValidationErrorsComponent {
    log(x){
        console.log(x);
    }
}