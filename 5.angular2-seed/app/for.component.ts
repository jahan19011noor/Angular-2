import {Component} from 'angular2/core';

@Component({
    selector: 'ng-for',
    template: `
        <ul>
            <li *ngFor="#course of courses, #i = index">
                <!--//#course denotes a local variable called #course-->
                <!--//which generates another local variable index-->
                <!--//which can be accessed by another #var called #i-->
                <!--//and displayed with interpolations-->
                <!--//essentially #course grabs an index of courses-->
                {{ i + 1 }} - {{ course }}
            </li>
            <!--//the *before ngFor denotes the li/DOM element concerned is a template-->
            <!--//which has to be repeated until the condition is false-->
            <!--//if not used we have to do the following-->
            <template ngFor [ngForOf]="courses" #course #i=index>
                <li>{{ i+1 }} - {{ course }}</li>
            </template>
            <!--//so we are doing all that * could do menually-->
        </ul>
    `
})
export class ForComponent {
    courses = ['Course 1', 'Course 2', 'Course 3']
}