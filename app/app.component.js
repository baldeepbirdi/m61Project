System.register(['angular2/core', 'angular2/http', 'angular2/router', './dashboard.component', './deals.component', './dealDetails.component', './changePassword.component', './grid.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, dashboard_component_1, deals_component_1, dealDetails_component_1, changePassword_component_1, grid_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (deals_component_1_1) {
                deals_component_1 = deals_component_1_1;
            },
            function (dealDetails_component_1_1) {
                dealDetails_component_1 = dealDetails_component_1_1;
            },
            function (changePassword_component_1_1) {
                changePassword_component_1 = changePassword_component_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            }
            ],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app.mainNav.html',
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', as: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/deals', as: 'Deals', component: deals_component_1.DealsComponent },
                        { path: '/dealDetails', as: 'DealDetails', component: dealDetails_component_1.DealDetailsComponent },
                        { path: '/changePassword', as: 'ChangePassword', component: changePassword_component_1.ChangePasswordComponent },
                        { path: '/grid', as: 'Grid', component: grid_component_1.GridComponent}
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map