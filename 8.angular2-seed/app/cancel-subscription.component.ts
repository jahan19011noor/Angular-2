import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'cancel-subscription',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search Artists">
    `
})

export class CancelSubscriptionComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup");

        var subscription = keyups.subscribe(data => console.log(data));

        subscription.unsubscribe();
    }
}