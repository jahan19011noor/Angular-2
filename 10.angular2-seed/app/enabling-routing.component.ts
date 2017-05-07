import {Component} from 'angular2/core';

@Component({
    selector: 'enable-routing',
    templateUrl: '/app/app.component.html'
})

// 3 steps to enable routing

// 1. Include router.dev.js in index.html
// 2. set the base url for the angular app
        //angular uses this to compose related urls
        // in index.html put
            //<base href="/">       as it is the root file
        //in html for admin page it will be "/admin/" as all other pages will followed afterwards
// 3. Register router providers in the bootstrap to avoid registering in all components
export class EnablingRoutingComponent {
}