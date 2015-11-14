System.register("index", ["angular2/router", "ionic/ionic"], function (_export) {
    "use strict";

    var RouteConfig, Location, App, Page, NavParams, ViewController, __decorate, __metadata, View1Cmp, View2Cmp, View3Cmp, InboxApp, _a, _b, _c, _d, _e, _f, _g, _h;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Router) {
            RouteConfig = _angular2Router.RouteConfig;
            Location = _angular2Router.Location;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            Page = _ionicIonic.Page;
            NavParams = _ionicIonic.NavParams;
            ViewController = _ionicIonic.ViewController;
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

            View1Cmp = (function () {
                function View1Cmp(location, viewCtrl) {
                    _classCallCheck(this, View1Cmp);

                    this.path = location.path();
                    this.viewCtrl = viewCtrl;
                    console.log("View1Cmp, path: " + this.path);
                }

                _createClass(View1Cmp, [{
                    key: "onPageDidEnter",
                    value: function onPageDidEnter() {
                        this.windowHash = window.location.hash;
                    }
                }]);

                return View1Cmp;
            })();

            View1Cmp = __decorate([Page({ templateUrl: 'view1.html' }), __metadata('design:paramtypes', [typeof (_a = typeof Location !== 'undefined' && Location) === 'function' && _a || Object, typeof (_b = typeof ViewController !== 'undefined' && ViewController) === 'function' && _b || Object])], View1Cmp);

            View2Cmp = (function () {
                function View2Cmp(location, viewCtrl) {
                    _classCallCheck(this, View2Cmp);

                    this.path = location.path();
                    this.viewCtrl = viewCtrl;
                    console.log("View2Cmp, path: " + this.path);
                }

                _createClass(View2Cmp, [{
                    key: "onPageDidEnter",
                    value: function onPageDidEnter() {
                        this.windowHash = window.location.hash;
                    }
                }]);

                return View2Cmp;
            })();

            View2Cmp = __decorate([Page({ templateUrl: 'view2.html' }), __metadata('design:paramtypes', [typeof (_c = typeof Location !== 'undefined' && Location) === 'function' && _c || Object, typeof (_d = typeof ViewController !== 'undefined' && ViewController) === 'function' && _d || Object])], View2Cmp);

            View3Cmp = (function () {
                function View3Cmp(params, location, viewCtrl) {
                    _classCallCheck(this, View3Cmp);

                    this.id = params.get('id');
                    this.path = location.path();
                    this.viewCtrl = viewCtrl;
                    console.log("View3Cmp, path: " + this.path + ", param id: " + this.id);
                }

                _createClass(View3Cmp, [{
                    key: "onPageDidEnter",
                    value: function onPageDidEnter() {
                        this.windowHash = window.location.hash;
                    }
                }]);

                return View3Cmp;
            })();

            View3Cmp = __decorate([Page({ templateUrl: 'view3.html' }), __metadata('design:paramtypes', [typeof (_e = typeof NavParams !== 'undefined' && NavParams) === 'function' && _e || Object, typeof (_f = typeof Location !== 'undefined' && Location) === 'function' && _f || Object, typeof (_g = typeof ViewController !== 'undefined' && ViewController) === 'function' && _g || Object])], View3Cmp);

            InboxApp = function InboxApp(location) {
                _classCallCheck(this, InboxApp);

                this.location = location;
            };

            InboxApp = __decorate([App(), RouteConfig([{ path: '/', component: View1Cmp, as: 'First' }, { path: '/2', component: View2Cmp, as: 'Second' }, { path: '/3/:id', component: View3Cmp, as: 'Third' }]), __metadata('design:paramtypes', [typeof (_h = typeof Location !== 'undefined' && Location) === 'function' && _h || Object])], InboxApp);
        }
    };
});