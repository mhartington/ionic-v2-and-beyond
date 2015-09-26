System.register("e2e/nav/basic/pages/first-page", ["ionic/ionic", "./second-page", "./third-page"], function (_export) {
    "use strict";

    var IonicView, IonicConfig, IonicApp, NavController, SecondPage, ThirdPage, __decorate, __metadata, FirstPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            IonicConfig = _ionicIonic.IonicConfig;
            IonicApp = _ionicIonic.IonicApp;
            NavController = _ionicIonic.NavController;
        }, function (_secondPage) {
            SecondPage = _secondPage.SecondPage;
        }, function (_thirdPage) {
            ThirdPage = _thirdPage.ThirdPage;
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
                    this.pushData = {
                        id: 420
                    };
                }

                _createClass(FirstPage, [{
                    key: "setItems",
                    value: function setItems() {
                        var items = [ThirdPage];
                        this.nav.setItems(items);
                    }

                    // viewLoaded() {
                    //   console.log('viewLoaded first page');
                    // }
                    // viewWillEnter() {
                    //   console.log('viewWillEnter first page');
                    // }
                    // viewDidEnter() {
                    //   console.log('viewDidEnter first page');
                    // }
                    // viewWillLeave() {
                    //   console.log('viewWillLeave first page');
                    // }
                    // viewDidLeave() {
                    //   console.log('viewDidLeave first page');
                    // }
                    // viewWillUnload() {
                    //   console.log('viewWillUnload first page');
                    // }
                    // viewDidUnload() {
                    //   console.log('viewDidUnload first page');
                    // }
                }, {
                    key: "push",
                    value: function push() {
                        this.nav.push(SecondPage, { id: 8675309, myData: [1, 2, 3, 4] });
                    }
                }]);

                return FirstPage;
            })();

            _export("FirstPage", FirstPage);

            _export("FirstPage", FirstPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar primary>' + '<ion-title>{{title}}</ion-title>' + '<ion-nav-items secondary>' + '<button>S1</button>' + '</ion-nav-items>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p>{{title}}</p>' + '<p><button id="from1To2" primary (click)="push()">Push (Go to 2nd)</button></p>' + '<p><button [push-data]="pushData" [nav-push]="pushPage">Push w/ nav-push (Go to 2nd)</button></p>' + '<p><button (click)="setItems()">setItems() (Go to 3rd, no history)</button></p>' + '<icon class="ion-ios-arrow-back"></icon>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof IonicApp !== 'undefined' && IonicApp || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object])], FirstPage));
        }
    };
});