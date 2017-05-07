import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'subscribe',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search Artists">
    `
})

export class ObservableSubscribeComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup");

        keyups.subscribe(data => console.log(data));
    }
}