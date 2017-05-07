import {Component} from 'angular2/core';

//two ways of controlling display of DOM elements
// ngIf directive
// hidden property

@Component({
    selector: 'ng-if',
    // ngIf directive destroyes the DOM element if the condition is false
    // template: `
    //     <div *ngIf="courses > 0">
    //         List of Courses
    //     </div>
    //     <div *ngIf="courses == 0">
    //         You don't have any courses listed yet.
    //     </div>
    // `
    // ngIf directive destroyes the DOM element if the condition is false

    // hidden property hides the DOM element if the condition is false
    template: `
        <div [hidden]="courses == 0">
            List of Courses
        </div>
        <div [hidden]="courses > 0">
            You don't have any courses listed yet.
        </div>
    `
    // hidden property hides the DOM element if the condition is false
})

export class IfComponent {
    courses = [];
}