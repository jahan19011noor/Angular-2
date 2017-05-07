import {Component} from 'angular2/core';

@Component({
    selector: 'ng-class',
    template: `
        <i class="glyphicon"
                [ngClass]="{
                    'glyphicon-star-empty': !isFavorite,
                    'glyphicon-star': isFavorite
                }"
            (click)="onClick()"
        ></i>
    `
})
export class ClassComponent {
    isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite
    }
}