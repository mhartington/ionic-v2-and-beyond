System.register("index", ["angular2/router", "ionic/ionic"], function (_export) {
    "use strict";

    var RouteConfig, App, IonicView, NavController, __decorate, __metadata, SignIn, TabsPage, Tab1Page1, Tab1Page2, Tab1Page3, Tab2Page1, Tab2Page2, Tab2Page3, Tab3Page1, E2EApp, _a, _b, _c, _d, _e, _f, _g, _h;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Router) {
            RouteConfig = _angular2Router.RouteConfig;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
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
                            return (d && d(target, key), void 0);
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

            SignIn = (function () {
                function SignIn(nav) {
                    _classCallCheck(this, SignIn);

                    this.nav = nav;
                }

                _createClass(SignIn, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(TabsPage);
                    }
                }]);

                return SignIn;
            })();

            SignIn = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Sign In</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button id="signIn" (click)="push()">Go to tabs</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object])], SignIn);

            TabsPage = function TabsPage(nav) {
                _classCallCheck(this, TabsPage);

                this.tab1Root = Tab1Page1;
                this.tab2Root = Tab2Page1;
                this.tab3Root = Tab3Page1;
            };

            TabsPage = __decorate([IonicView({
                templateUrl: './tabs.html'
            }), __metadata('design:paramtypes', [typeof (_b = typeof NavController !== 'undefined' && NavController) === 'function' && _b || Object])], TabsPage);
            //
            // tab 1
            //

            Tab1Page1 = (function () {
                function Tab1Page1(nav) {
                    _classCallCheck(this, Tab1Page1);

                    this.nav = nav;
                }

                _createClass(Tab1Page1, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(Tab1Page2);
                    }
                }]);

                return Tab1Page1;
            })();

            Tab1Page1 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 1</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button id="goToTab1Page2" (click)="push()">Go to Tab 1, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_c = typeof NavController !== 'undefined' && NavController) === 'function' && _c || Object])], Tab1Page1);

            Tab1Page2 = (function () {
                function Tab1Page2(nav) {
                    _classCallCheck(this, Tab1Page2);

                    this.nav = nav;
                }

                _createClass(Tab1Page2, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(Tab1Page3);
                    }
                }]);

                return Tab1Page2;
            })();

            Tab1Page2 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 2</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button (click)="push()">Go to Tab 1, Page 3</button></p>' + '<p><button id="backToTab1Page1" (click)="nav.pop()">Back to Tab 1, Page 1</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object])], Tab1Page2);

            Tab1Page3 = function Tab1Page3(nav) {
                _classCallCheck(this, Tab1Page3);

                this.nav = nav;
            };

            Tab1Page3 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 3</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button (click)="nav.pop()">Back to Tab 1, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_e = typeof NavController !== 'undefined' && NavController) === 'function' && _e || Object])], Tab1Page3);
            //
            // tab 2
            //

            Tab2Page1 = (function () {
                function Tab2Page1(nav) {
                    _classCallCheck(this, Tab2Page1);

                    this.nav = nav;
                }

                _createClass(Tab2Page1, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(Tab2Page2);
                    }
                }]);

                return Tab2Page1;
            })();

            Tab2Page1 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 1</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button (click)="push()">Go to Tab 2, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_f = typeof NavController !== 'undefined' && NavController) === 'function' && _f || Object])], Tab2Page1);

            Tab2Page2 = (function () {
                function Tab2Page2(nav) {
                    _classCallCheck(this, Tab2Page2);

                    this.nav = nav;
                }

                _createClass(Tab2Page2, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(Tab2Page3);
                    }
                }]);

                return Tab2Page2;
            })();

            Tab2Page2 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 2</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button (click)="push()">Go to Tab 2, Page 3</button></p>' + '<p><button (click)="nav.pop()">Back to Tab 2, Page 1</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_g = typeof NavController !== 'undefined' && NavController) === 'function' && _g || Object])], Tab2Page2);

            Tab2Page3 = function Tab2Page3(nav) {
                _classCallCheck(this, Tab2Page3);

                this.nav = nav;
            };

            Tab2Page3 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 3</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<p><button (click)="nav.pop()">Back to Tab 2, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_h = typeof NavController !== 'undefined' && NavController) === 'function' && _h || Object])], Tab2Page3);
            //
            // tab 3
            //

            Tab3Page1 = function Tab3Page1() {
                _classCallCheck(this, Tab3Page1);
            };

            Tab3Page1 = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 3</ion-title>' + '</ion-navbar>' + '<ion-content padding><h2>Tabs 3</h2></ion-content>'
            }), __metadata('design:paramtypes', [])], Tab3Page1);

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);
            };

            E2EApp = __decorate([App(), RouteConfig([{ path: '/', component: SignIn, as: 'signin' }, { path: '/tabs', component: TabsPage, as: 'tabs' }]), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});