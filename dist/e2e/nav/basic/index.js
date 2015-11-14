System.register("index", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var Component, App, NavController, Page, Config, IonicApp, NavParams, ViewController, IONIC_DIRECTIVES, __decorate, __metadata, MyCmpTest, FirstPage, FullPage, PrimaryHeaderPage, AnotherPage, E2EApp, _a, _b, _c, _d, _e, _f, _g, _h;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            NavController = _ionicIonic.NavController;
            Page = _ionicIonic.Page;
            Config = _ionicIonic.Config;
            IonicApp = _ionicIonic.IonicApp;
            NavParams = _ionicIonic.NavParams;
            ViewController = _ionicIonic.ViewController;
            IONIC_DIRECTIVES = _ionicIonic.IONIC_DIRECTIVES;
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

            MyCmpTest = function MyCmpTest() {
                _classCallCheck(this, MyCmpTest);
            };

            MyCmpTest = __decorate([Component({
                selector: 'my-cmp',
                template: "<p>My Custom Component Test <icon star></icon></p>",
                directives: [IONIC_DIRECTIVES]
            }), __metadata('design:paramtypes', [])], MyCmpTest);

            FirstPage = (function () {
                function FirstPage(nav, app, config) {
                    _classCallCheck(this, FirstPage);

                    this.nav = nav;
                    this.title = 'First Page';
                    this.pushPage = FullPage;
                    this.pages = [];
                    for (var i = 1; i <= 50; i++) {
                        this.pages.push(i);
                    }
                }

                _createClass(FirstPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [PrimaryHeaderPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "pushPrimaryHeaderPage",
                    value: function pushPrimaryHeaderPage() {
                        this.nav.push(PrimaryHeaderPage);
                    }
                }, {
                    key: "pushFullPage",
                    value: function pushFullPage() {
                        this.nav.push(FullPage, { id: 8675309, myData: [1, 2, 3, 4] });
                    }
                }, {
                    key: "pushAnother",
                    value: function pushAnother() {
                        this.nav.push(AnotherPage);
                    }
                }]);

                return FirstPage;
            })();

            FirstPage = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <ion-title>{{title}}</ion-title>\n      <ion-nav-items primary>\n        <button><icon star></icon></button>\n      </ion-nav-items>\n      <ion-nav-items secondary>\n        <button>S1</button>\n      </ion-nav-items>\n    </ion-navbar>\n    <ion-content>\n      <ion-list>\n        <ion-header>\n          {{title}}\n        </ion-header>\n\n        <button ion-item class=\"e2eFrom1To2\" (click)=\"pushFullPage()\">Push to FullPage</button>\n        <button ion-item (click)=\"pushPrimaryHeaderPage()\">Push to PrimaryHeaderPage</button>\n        <button ion-item (click)=\"pushAnother()\">Push to AnotherPage</button>\n        <button ion-item [nav-push]=\"[pushPage, {id: 42}]\">Push FullPage w/ [nav-push] array</button>\n        <button ion-item [nav-push]=\"pushPage\" [nav-params]=\"{id:40}\">Push w/ [nav-push] and [nav-params]</button>\n        <button ion-item [nav-push]=\"['FirstPage', {id: 22}]\">Push w/ [nav-push] array and string view name</button>\n        <button ion-item nav-push=\"FirstPage\" [nav-params]=\"{id: 23}\">Push w/ nav-push and [nav-params]</button>\n        <button ion-item (click)=\"setViews()\">setViews() (Go to PrimaryHeaderPage)</button>\n        <button ion-item (click)=\"nav.pop()\">Pop</button>\n\n        <button *ng-for=\"#i of pages\" ion-item (click)=\"pushPrimaryHeaderPage()\">Page {{i}}</button>\n      </ion-list>\n      <my-cmp></my-cmp>\n    </ion-content>",
                directives: [MyCmpTest]
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _b || Object, typeof (_c = typeof Config !== 'undefined' && Config) === 'function' && _c || Object])], FirstPage);

            FullPage = (function () {
                function FullPage(nav, params) {
                    _classCallCheck(this, FullPage);

                    this.nav = nav;
                    this.params = params;
                }

                _createClass(FullPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [FirstPage, PrimaryHeaderPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "pushPrimaryHeaderPage",
                    value: function pushPrimaryHeaderPage() {
                        this.nav.push(PrimaryHeaderPage);
                    }
                }, {
                    key: "pushAnother",
                    value: function pushAnother() {
                        this.nav.push(AnotherPage);
                    }
                }, {
                    key: "pushFirstPage",
                    value: function pushFirstPage() {
                        this.nav.push(FirstPage);
                    }
                }]);

                return FullPage;
            })();

            FullPage = __decorate([Page({
                template: "\n    <ion-content padding>\n      <h1>Full page</h1>\n      <p>This page does not have a nav bar!</p>\n      <p><button (click)=\"nav.pop()\">Pop</button></p>\n      <p><button class=\"e2eFrom2To3\" (click)=\"pushPrimaryHeaderPage()\">Push to PrimaryHeaderPage</button></p>\n      <p><button (click)=\"pushAnother()\">Push to AnotherPage</button></p>\n      <p><button (click)=\"pushFirstPage()\">Push to FirstPage</button></p>\n      <p><button class=\"e2eFrom2To1\" nav-pop>Pop with NavPop (Go back to 1st)</button></p>\n      <p><button (click)=\"setViews()\">setViews() (Go to PrimaryHeaderPage, FirstPage 1st in history)</button></p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object, typeof (_e = typeof NavParams !== 'undefined' && NavParams) === 'function' && _e || Object])], FullPage);

            PrimaryHeaderPage = (function () {
                function PrimaryHeaderPage(nav) {
                    _classCallCheck(this, PrimaryHeaderPage);

                    this.nav = nav;
                }

                _createClass(PrimaryHeaderPage, [{
                    key: "pushAnother",
                    value: function pushAnother() {
                        this.nav.push(AnotherPage);
                    }
                }, {
                    key: "pushFullPage",
                    value: function pushFullPage() {
                        this.nav.push(FullPage, { id: 8675309, myData: [1, 2, 3, 4] });
                    }
                }, {
                    key: "insert",
                    value: function insert() {
                        this.nav.insert(FirstPage, 2);
                    }
                }, {
                    key: "removeSecond",
                    value: function removeSecond() {
                        this.nav.remove(1);
                    }
                }]);

                return PrimaryHeaderPage;
            })();

            PrimaryHeaderPage = __decorate([Page({
                template: "\n    <ion-navbar *navbar primary>\n      <ion-title>Primary Color Page Header</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p><button class=\"e2eFrom3To2\" (click)=\"nav.pop()\">Pop</button></p>\n      <p><button (click)=\"pushAnother()\">Push to AnotherPage</button></p>\n      <p><button (click)=\"pushFullPage()\">Push to FullPage</button></p>\n      <p><button id=\"insert\" (click)=\"insert()\">Insert first page into history before this</button></p>\n      <p><button id=\"remove\" (click)=\"removeSecond()\">Remove second page in history</button></p>\n      <div class=\"yellow\"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_f = typeof NavController !== 'undefined' && NavController) === 'function' && _f || Object])], PrimaryHeaderPage);

            AnotherPage = (function () {
                function AnotherPage(nav, viewCtrl) {
                    _classCallCheck(this, AnotherPage);

                    this.nav = nav;
                    this.viewCtrl = viewCtrl;
                    this.bbHideToggleVal = true;
                }

                _createClass(AnotherPage, [{
                    key: "pushFullPage",
                    value: function pushFullPage() {
                        this.nav.push(FullPage);
                    }
                }, {
                    key: "pushPrimaryHeaderPage",
                    value: function pushPrimaryHeaderPage() {
                        this.nav.push(PrimaryHeaderPage);
                    }
                }, {
                    key: "pushFirstPage",
                    value: function pushFirstPage() {
                        this.nav.push(FirstPage);
                    }
                }, {
                    key: "toggleBackButton",
                    value: function toggleBackButton() {
                        this.bbHideToggleVal = !this.bbHideToggleVal;
                        this.viewCtrl.hideBackButton(this.bbHideToggleVal);
                    }
                }]);

                return AnotherPage;
            })();

            AnotherPage = __decorate([Page({
                template: "\n    <ion-navbar *navbar hide-back-button>\n      <ion-title>Another Page Header</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p>Back button hidden w/ <code>ion-navbar hide-back-button</code></p>\n      <p><button (click)=\"nav.pop()\">Pop</button></p>\n      <p><button (click)=\"pushFullPage()\">Push to FullPage</button></p>\n      <p><button (click)=\"pushPrimaryHeaderPage()\">Push to PrimaryHeaderPage</button></p>\n      <p><button (click)=\"pushFirstPage()\">Push to FirstPage</button></p>\n      <p><button (click)=\"toggleBackButton()\">Toggle hide-back-button</button></p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_g = typeof NavController !== 'undefined' && NavController) === 'function' && _g || Object, typeof (_h = typeof ViewController !== 'undefined' && ViewController) === 'function' && _h || Object])], AnotherPage);

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);

                this.root = FirstPage;
            };

            E2EApp = __decorate([App({
                pages: [FirstPage, FullPage, PrimaryHeaderPage, AnotherPage],
                template: "<ion-nav [root]=\"root\"></ion-nav>"
            }), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});