System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DealsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DealsComponent = (function () {
                function DealsComponent() {
                    this.name = 'john';
                    this.message = '';
                }
                DealsComponent.prototype.sayHello = function () {
                    this.message = 'Hello ' + this.name + '!';
                };
                DealsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-deals',
                        templateUrl: 'app/deals.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DealsComponent);
                return DealsComponent;
            }());
            exports_1("DealsComponent", DealsComponent);
        }
    }
});
//# sourceMappingURL=deals.component.js.map