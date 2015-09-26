System.register("e2e/nav/basic/pages/second-page", ["ionic/ionic", "./third-page", "./first-page"], function (_export) {
    "use strict";

    var IonicView, NavController, NavParams, ThirdPage, FirstPage, __decorate, __metadata, SecondPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
        }, function (_thirdPage) {
            ThirdPage = _thirdPage.ThirdPage;
        }, function (_firstPage) {
            FirstPage = _firstPage.FirstPage;
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

            SecondPage = (function () {
                function SecondPage(nav, params) {
                    _classCallCheck(this, SecondPage);

                    this.nav = nav;
                    this.params = params;
                    console.log('Second page params:', params);
                }

                _createClass(SecondPage, [{
                    key: "setItems",
                    value: function setItems() {
                        var items = [FirstPage, ThirdPage];
                        this.nav.setItems(items);
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

            _export("SecondPage", SecondPage);

            _export("SecondPage", SecondPage = __decorate([IonicView({
                template: "\n    <ion-content class=\"padding\">\n      <h1>Second page</h1>\n      <p>This page does not have a nav bar!</p>\n      <p><button (click)=\"pop()\">Pop (Go back to 1st)</button></p>\n      <p><button id=\"from2To1\" nav-pop>Pop with NavPop (Go back to 1st)</button></p>\n      <p><button id=\"from2To3\" (click)=\"push()\">Push (Go to 3rd)</button></p>\n      <p><button (click)=\"setItems()\">setItems() (Go to 3rd, FirstPage 1st in history)</button></p>\n      <div class=\"green\"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof NavParams !== 'undefined' && NavParams || Object])], SecondPage));
        }
    };
});