import {Component} from 'angular2/core';
// import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
// following code is cleaner
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])

@Component({
    selector: 'add-links',
    templateUrl: '/app/app.component.html',
    // directives: [RouterOutlet, RouterLink]
    // following code is clearner
    directives: [ROUTER_DIRECTIVES]
})

export class AddLinksComponent {
}