import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component'

@Component({
    selector: 'ng-control',
    directives: [ContactFormComponent],
    template: `
        <contact-form></contact-form>
    `
})
export class NgControlComponent {

    //up to tutorial number 59
}