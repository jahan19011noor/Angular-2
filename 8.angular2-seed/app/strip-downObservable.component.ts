import {Component} from 'angular2/core';
// import {Observable} from 'rxjs/Rx';
//includes all the observable operators
//all might not be necessary on a production application
//so unnecessary must be illuminated
//so use rxjs/Observable instead
//which is a strip down observable
//then manually import required Observable Operators on need
import {Observable} from 'rxjs/Observable';
//manually imports are below
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'strip-down',
    template: ``
})

export class StripDownObservableComponent {
    constructor(){
        console.log(new Observable());
    }
}