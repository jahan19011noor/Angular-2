import {Component} from 'angular2/core';
import {NgFormDirectiveComponent} from './ngform-directive.component'

@Component({
    selector: 'ng-form',
    directives: [NgFormDirectiveComponent],
    template: `
        <ngForm-directive></ngForm-directive>
    `
})
export class NgFormComponent {

    //up to tutorial number 59
}