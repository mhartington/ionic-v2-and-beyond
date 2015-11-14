System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, __decorate, __metadata, E2EApp;

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

            E2EApp = (function () {
                function E2EApp() {
                    var _this = this;

                    _classCallCheck(this, E2EApp);

                    setTimeout(function () {
                        _this.shouldShow = true;
                    }, 10);
                }

                _createClass(E2EApp, [{
                    key: "getItems",
                    value: function getItems() {
                        console.log('getItems');
                        return [0, 1];
                    }
                }, {
                    key: "didClick",
                    value: function didClick(e) {
                        console.log('CLICK', e.defaultPrevented, e);
                    }
                }, {
                    key: "archive",
                    value: function archive(e) {
                        console.log('Accept', e);
                    }
                }, {
                    key: "del",
                    value: function del(e) {
                        console.log('Delete', e);
                    }
                }]);

                return E2EApp;
            })();

            E2EApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});