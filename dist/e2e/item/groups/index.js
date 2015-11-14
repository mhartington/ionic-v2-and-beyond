System.register("index", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var ElementRef, Host, Component, NgIf, NgFor, App, Content, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, __decorate, __metadata, __param, ComponentList, E2EApp, _a, _b;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Host = _angular2Angular2.Host;
            Component = _angular2Angular2.Component;
            NgIf = _angular2Angular2.NgIf;
            NgFor = _angular2Angular2.NgFor;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            Content = _ionicIonic.Content;
            Item = _ionicIonic.Item;
            ItemGroup = _ionicIonic.ItemGroup;
            ItemGroupTitle = _ionicIonic.ItemGroupTitle;
            ItemSliding = _ionicIonic.ItemSliding;
            List = _ionicIonic.List;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key), void 0;
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            ComponentList = function ComponentList(elementRef, content) {
                _classCallCheck(this, ComponentList);

                console.log('Component List init', content);
            };

            ComponentList = __decorate([Component({
                properties: ['data'],
                selector: 'component-list',
                directives: [ComponentList, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, NgIf, NgFor],
                templateUrl: 'component-list.html'
            }), __param(1, Host()), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Content !== 'undefined' && Content) === 'function' && _b || Object])], ComponentList);

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);

                var session = {
                    "name": "Breakfast",
                    "location": "Main hallway"
                };
                this.data = {
                    "day": "05/17/2016",
                    "sessions": [{
                        "name": "Breakfast",
                        "location": "Main hallway"
                    }]
                };
                for (var i = 0; i < 50; i++) {
                    this.data.sessions.push(session);
                }
            };

            E2EApp = __decorate([App({
                directives: [Content, ComponentList, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, NgIf, NgFor],
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});