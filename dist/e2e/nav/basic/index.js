System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, NavController, IonicView, IonicConfig, IonicApp, NavParams, __decorate, __metadata, FirstPage, SecondPage, ThirdPage, E2EApp, _a, _b, _c, _d, _e, _f;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            NavController = _ionicIonic.NavController;
            IonicView = _ionicIonic.IonicView;
            IonicConfig = _ionicIonic.IonicConfig;
            IonicApp = _ionicIonic.IonicApp;
            NavParams = _ionicIonic.NavParams;
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

            FirstPage = (function () {
                function FirstPage(nav, app, config) {
                    _classCallCheck(this, FirstPage);

                    this.nav = nav;
                    this.title = 'First Page';
                    this.pushPage = SecondPage;
                }

                _createClass(FirstPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [ThirdPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "push",
                    value: function push() {
                        this.nav.push(SecondPage, { id: 8675309, myData: [1, 2, 3, 4] });
                    }
                }]);

                return FirstPage;
            })();

            FirstPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar primary>' + '<ion-title>{{title}}</ion-title>' + '<ion-nav-items primary>' + '<button><icon star></icon></button>' + '</ion-nav-items>' + '<ion-nav-items secondary>' + '<button>S1</button>' + '</ion-nav-items>' + '</ion-navbar>' + '<ion-content padding>' + '<p>{{title}}</p>' + '<p><button id="from1To2" primary (click)="push()">Push (Go to 2nd)</button></p>' + '<p><button [nav-push]="[pushPage, {id: 42}]">Push w/ [nav-push] array (Go to 2nd)</button></p>' + '<p><button [nav-push]="pushPage" [nav-params]="{id:40}">Push w/ [nav-push] and [nav-params] (Go to 2nd)</button></p>' + '<p><button [nav-push]="[\'FirstPage\', {id: 22}]">Push w/ [nav-push] array and string view name (Go to 2nd)</button></p>' + '<p><button nav-push="FirstPage" [nav-params]="{id: 23}">Push w/ nav-push and [nav-params] (Go to 2nd)</button></p>' + '<p><button (click)="setViews()">setViews() (Go to 3rd, no history)</button></p>' + '<icon class="ion-ios-arrow-back"></icon>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _b || Object, typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c || Object])], FirstPage);

            SecondPage = (function () {
                function SecondPage(nav, params) {
                    _classCallCheck(this, SecondPage);

                    this.nav = nav;
                    this.params = params;
                    console.log('Second page params:', params);
                }

                _createClass(SecondPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [FirstPage, ThirdPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "pop",
                    value: function pop() {
                        this.nav.pop();
                    }
                }, {
                    key: "push",
                    value: function push() {
                        this.nav.push(ThirdPage);
                    }
                }]);

                return SecondPage;
            })();

            SecondPage = __decorate([IonicView({
                template: "\n    <ion-content padding>\n      <h1>Second page</h1>\n      <p>This page does not have a nav bar!</p>\n      <p><button (click)=\"pop()\">Pop (Go back to 1st)</button></p>\n      <p><button id=\"from2To1\" nav-pop>Pop with NavPop (Go back to 1st)</button></p>\n      <p><button id=\"from2To3\" (click)=\"push()\">Push (Go to 3rd)</button></p>\n      <p><button (click)=\"setViews()\">setViews() (Go to 3rd, FirstPage 1st in history)</button></p>\n      <div class=\"green\"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object, typeof (_e = typeof NavParams !== 'undefined' && NavParams) === 'function' && _e || Object])], SecondPage);

            ThirdPage = (function () {
                function ThirdPage(nav) {
                    _classCallCheck(this, ThirdPage);

                    this.nav = nav;
                }

                _createClass(ThirdPage, [{
                    key: "pop",
                    value: function pop() {
                        this.nav.pop();
                    }
                }, {
                    key: "insert",
                    value: function insert() {
                        this.nav.insert(FirstPage, 2);
                    }
                }]);

                return ThirdPage;
            })();

            ThirdPage = __decorate([IonicView({
                template: "\n    <ion-navbar *navbar><ion-title>Third Page Header</ion-title></ion-navbar>\n    <ion-content padding>\n      <p>\n        <button id=\"from3To2\" (click)=\"pop()\">Pop (Go back to 2nd)</button>\n        <button id=\"insert\" (click)=\"insert()\">Insert first page into history before this</button>\n      </p>\n      <div class=\"yellow\"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_f = typeof NavController !== 'undefined' && NavController) === 'function' && _f || Object])], ThirdPage);

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);

                this.root = FirstPage;
            };

            E2EApp = __decorate([App({
                template: '<ion-nav [root]="root"></ion-nav>',
                views: [FirstPage, SecondPage, ThirdPage]
            }), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});