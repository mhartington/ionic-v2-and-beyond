System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, Popup, __decorate, __metadata, E2EApp, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            Popup = _ionicIonic.Popup;
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

            E2EApp = (function () {
                function E2EApp(popup) {
                    _classCallCheck(this, E2EApp);

                    this.popup = popup;
                    this.alertOpen = false;
                    this.promptOpen = false;
                    this.promptResult = '';
                    this.confirmOpen = false;
                    this.confirmResult = '';
                }

                _createClass(E2EApp, [{
                    key: "doAlert",
                    value: function doAlert() {
                        var _this = this;

                        this.alertOpen = true;
                        this.popup.alert('Alert').then(function () {
                            _this.alertOpen = false;
                        });
                    }
                }, {
                    key: "doPrompt",
                    value: function doPrompt() {
                        var _this2 = this;

                        this.promptOpen = true;
                        this.popup.prompt('What is your name?').then(function (name) {
                            _this2.promptResult = name;
                            _this2.promptOpen = false;
                        }, function () {
                            console.error('Prompt closed');
                            _this2.promptOpen = false;
                        });
                    }
                }, {
                    key: "doConfirm",
                    value: function doConfirm() {
                        var _this3 = this;

                        this.confirmOpen = true;
                        this.popup.confirm('Are you sure?').then(function (result, ev) {
                            console.log('CONFIRMED', result);
                            _this3.confirmResult = result;
                            _this3.confirmOpen = false;
                        }, function () {
                            _this3.confirmOpen = false;
                            console.error('NOT CONFIRMED');
                        });
                    }
                }]);

                return E2EApp;
            })();

            E2EApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof Popup !== 'undefined' && Popup) === 'function' && _a || Object])], E2EApp);
        }
    };
});