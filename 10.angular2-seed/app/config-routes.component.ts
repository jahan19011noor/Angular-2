import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";

//RouteConfig is an annotation
//contains route definitions
//which in turn
// contains
// the url path
// the name
// the component name
// of the route

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    //to catch all invalid routes
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])

@Component({
    selector: 'config-routes',
    templateUrl: '/app/app.component.html'
})

export class ConfigRoutesComponent {
}