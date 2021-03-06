import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'transform-observable',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search Artists">
    `
})

export class TransformingObservableComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value)      //maps the event object Observable to another object Observable
            .filter(text => text.length > 3)
            .debounceTime(400)              //waites for 400ms before returning the object
            .distinctUntilChanged()        //insures event is not called on duplicate
            .map(searchTerm => {
                var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                var promise = $.getJSON(url);       // we get a promise from the ajax call
                return Observable.fromPromise(promise);    //then create an observable from the promise
            })
        keyups.subscribe(data => console.log(data));
    }
}