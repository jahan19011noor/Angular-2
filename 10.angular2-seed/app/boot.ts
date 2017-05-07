import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

// import {AppComponent} from './app.component'
// bootstrap(AppComponent);

// import {EnablingRoutingComponent} from './enabling-routing.component'
// bootstrap(EnablingRoutingComponent, [ROUTER_PROVIDERS]);

// import {ConfigRoutesComponent} from './config-routes.component'
// bootstrap(ConfigRoutesComponent, [ROUTER_PROVIDERS]);

// import {RouterOutletComponent} from './router-outlet.component'
// bootstrap(RouterOutletComponent, [ROUTER_PROVIDERS]);

// import {AddLinksComponent} from './add-links.component'
// bootstrap(AddLinksComponent, [ROUTER_PROVIDERS]);

import {RouteParamsComponent} from './route-params.component'
bootstrap(RouteParamsComponent, [ROUTER_PROVIDERS]);