import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h5>get() - > getting resource</h5>
            <h5>post() - > creating resource</h5>
            <h5>put() - > updating a complete resource object</h5>
            <h5>patch() - > updating part of a resource object</h5>
            <h5>delete() - > deleting resource</h5>
            <h5>head() - > getting meta-data of the resource</h5>
        </div>
    `
})
export class AppComponent { }