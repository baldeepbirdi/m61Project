import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';

import { DashboardComponent } from './dashboard.component';
import { DealsComponent } from './deals.component';
import { DealDetailsComponent } from './dealDetails.component';
import { ChangePasswordComponent } from './changePassword.component';
import { GridComponent } from './grid.component';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.mainNav.html',
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/deals', as: 'Deals', component: DealsComponent },
  { path: '/dealDetails', as: 'DealDetails', component: DealDetailsComponent },
  { path: '/changePassword', as: 'ChangePassword', component: ChangePasswordComponent },
  { path: '/grid', as: 'Grid', component: GridComponent }
])
export class AppComponent { }
