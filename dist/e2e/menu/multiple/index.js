System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, IonicApp, Page, __decorate, __metadata, Page1, E2EApp, _a, _b;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicApp = _ionicIonic.IonicApp;
            Page = _ionicIonic.Page;
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

            Page1 = (function () {
                function Page1(app) {
                    _classCallCheck(this, Page1);

                    this.app = app;
                    this.menu1Active();
                }

                _createClass(Page1, [{
                    key: "menu1Active",
                    value: function menu1Active() {
                        this.activeMenu = 'menu1';
                        this.app.getComponent('menu1').enable(true);
                        this.app.getComponent('menu2').enable(false);
                    }
                }, {
                    key: "menu2Active",
                    value: function menu2Active() {
                        this.activeMenu = 'menu2';
                        this.app.getComponent('menu1').enable(false);
                        this.app.getComponent('menu2').enable(true);
                    }
                }]);

                return Page1;
            })();

            Page1 = __decorate([Page({
                templateUrl: 'page1.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a || Object])], Page1);

            E2EApp = function E2EApp(app) {
                _classCallCheck(this, E2EApp);

                this.app = app;
                this.rootPage = Page1;
            };

            E2EApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof (_b = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _b || Object])], E2EApp);
        }
    };
});