import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { DealsComponent } from './deals.component';
import { DealDetailsComponent } from './dealDetails.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.mainNav.html',
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/deals', as: 'Deals', component: DealsComponent },
  { path: '/dealDetails', as: 'DealDetails', component: DealDetailsComponent }
])
export class AppComponent { }
