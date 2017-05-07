import {Component} from 'angular2/core';

@Component({
    selector: 'elvis',
    template: `
        <ul>
            <li>Title: {{ task.title }}</li>
            <!--<li>Assigned to: {{ task.assignee.name }}</li>-->
            <li>Assigned to: {{ task.assignee?.name }}</li>
            <!--gives blank string if finds null-->
        </ul>
    `
})
export class ElvisComponent {
    task = {
        title: "Review Applications",
        // suppose this
        // assignee: {
        //     name: 'Noor'
        // }
        // is changed to
        assignee: {
            name: null
        }
        // gives error because we are
        // trying to access the name property of null
        // task.assignee.name

        // solutions might be

        // using ngIf
        // use a ternary operator in the interpolation
        // use the elvis operator '?.'
        // gives blank string if finds null
    };
}