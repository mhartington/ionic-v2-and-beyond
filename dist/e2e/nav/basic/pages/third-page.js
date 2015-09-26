System.register("e2e/nav/basic/pages/third-page", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, NavController, __decorate, __metadata, ThirdPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
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
                }]);

                return ThirdPage;
            })();

            _export("ThirdPage", ThirdPage);

            _export("ThirdPage", ThirdPage = __decorate([IonicView({
                template: "\n    <ion-navbar *navbar><ion-title>Third Page Header</ion-title></ion-navbar>\n    <ion-content class=\"padding\">\n      <p>\n        <button id=\"from3To2\" (click)=\"pop()\">Pop (Go back to 2nd)</button>\n      </p>\n      <div class=\"yellow\"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], ThirdPage));
        }
    };
});