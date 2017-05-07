import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
            .glyphicon-star{
                color: orange;
            }
        `],
    // styleUrls: []        required when using lot of css files allows mutliple styles sheet files
    // template: `
    //     <i
    //         class="glyphicon"
    //         [class.glyphicon-star-empty]="!isFavorite"
    //         [class.glyphicon-star]="isFavorite"
    //         (click)="onClick()"
    //     ></i>
    // `,

    // inputs: ['isFavorite:is-favorite'],
    // outputs: ['change:favoriteChange']
})

export class FavoriteComponent {
    // @Input() isFavorite = false;     //prefered approach
    // isFavorite = false;
    // @Output('favoriteChange') change = new EventEmitter();

    @Input('is-favorite') isFavorite = false;
    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite })
    }
}