import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search Artists">
    `
})
export class AppComponent {

    //normal jquery approach to solving autocomplete
    constructor(){
        var debounce = _.debounce(function (text) {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
            $.getJSON(url, function (artists) {
                console.log(artists);
            })
        }, 400);

        $('#search').keyup(function (e) {
            var text = e.target.value;

            if(text.length < 3)
                return;

            debounce(text);
        })
    }
    //normal jquery approach to solving autocomplete
}
