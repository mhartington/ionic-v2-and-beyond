System.register("e2e/slides/continuous/index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, __decorate, __metadata, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
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

            IonicApp = (function () {
                function IonicApp() {
                    _classCallCheck(this, IonicApp);
                }

                _createClass(IonicApp, [{
                    key: "next",
                    value: function next() {
                        console.log('Next');
                    }
                }, {
                    key: "prev",
                    value: function prev() {
                        console.log('Prev');
                    }
                }]);

                return IonicApp;
            })();

            IonicApp = __decorate([App({
                template: "\n    <ion-slides #slides loop>\n      <ion-slide style=\"background-color: blue\">\n        <h2>Page 1</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: yellow\">\n        <h2>Page 2</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: pink\">\n        <h2>Page 3</h2>\n      </ion-slide>\n      <ion-pager>\n      </ion-pager>\n    </ion-slides>\n\n    <div style=\"position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center\">\n      <button (click)=\"slides.prev()\">Prev</button>\n      <button (click)=\"slides.next()\">Next</button>\n    </div>\n  "
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});