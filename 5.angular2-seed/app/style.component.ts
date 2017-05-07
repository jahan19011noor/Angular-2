import {Component} from 'angular2/core';

@Component({
    selector: 'ng-style',
    template: `
        <!--[style.backgroundColor]="canSave ? 'blue' : 'gray'"-->
        <!--[style.color]="canSave ? 'white' : 'black'"-->
        <!--[style.fontWeight]="canSave ? 'bold' : 'normal'"-->
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'
            }"
        >Button</button>
    `
})
export class StyleComponent {
    canSave = true;
}