import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'map',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search Artists">
    `
})

export class ObservableMapComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value)      //maps the event object Observable to another object Observable
            .filter(text => text.length > 3)
            .debounceTime(400)
            .distinctUntilChanged();

        keyups.subscribe(data => console.log(data));
    }
}