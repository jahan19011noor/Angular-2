import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";

//router-outlet element identifies where in the DOM the content of route component is loaded
//the outlet element is included in the template definition for the router config component
//the <router-outlet> is a directive that we need to register in the route config component

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])

@Component({
    selector: 'router-outlet',
    templateUrl: '/app/app.component.html',
    directives: [RouterOutlet]
})

export class RouterOutletComponent {
}