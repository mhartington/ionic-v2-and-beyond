System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, NavController, Page, IonicApp, __decorate, __metadata, Login, Account, Dashboard, Profile, E2EApp, _a, _b, _c, _d, _e, _f;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            NavController = _ionicIonic.NavController;
            Page = _ionicIonic.Page;
            IonicApp = _ionicIonic.IonicApp;
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

            Login = (function () {
                function Login(nav) {
                    _classCallCheck(this, Login);

                    this.nav = nav;
                }

                _createClass(Login, [{
                    key: "goToAccount",
                    value: function goToAccount() {
                        this.nav.push(Account);
                    }
                }]);

                return Login;
            })();

            _export("Login", Login);

            _export("Login", Login = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <ion-title>Login</ion-title>\n    </ion-navbar>\n    <ion-content style=\"text-align:center;\" padding>\n      <button (click)=\"goToAccount()\">Login</button>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object])], Login));

            Account = (function () {
                function Account(app) {
                    _classCallCheck(this, Account);

                    this.app = app;
                    this.rootPage = Dashboard;
                }

                _createClass(Account, [{
                    key: "goToProfile",
                    value: function goToProfile() {
                        var _this = this;

                        this.app.getComponent('account-nav').setRoot(Profile).then(function () {
                            _this.app.getComponent('menu').close();
                        });
                    }
                }, {
                    key: "goToDashboard",
                    value: function goToDashboard() {
                        var _this2 = this;

                        this.app.getComponent('account-nav').setRoot(Dashboard).then(function () {
                            _this2.app.getComponent('menu').close();
                        });
                    }
                }, {
                    key: "logOut",
                    value: function logOut() {
                        this.app.getComponent('root-nav').setRoot(Login, null, { animate: true });
                    }
                }]);

                return Account;
            })();

            _export("Account", Account);

            _export("Account", Account = __decorate([Page({
                template: "\n    <ion-menu [content]=\"content\">\n     <ion-toolbar secondary>\n       <ion-title>Account Menu</ion-title>\n     </ion-toolbar>\n     <ion-content>\n       <ion-list>\n         <button ion-item (click)=\"goToProfile()\">\n           Profile\n         </button>\n         <button ion-item (click)=\"goToDashboard()\">\n           Dashboard\n         </button>\n         <button ion-item detail-none (click)=\"logOut()\">\n           Logout\n         </button>\n       </ion-list>\n     </ion-content>\n    </ion-menu>\n\n    <ion-nav id=\"account-nav\" [root]=\"rootPage\" #content swipe-back-enabled=\"false\"></ion-nav>\n  "
            }), __metadata('design:paramtypes', [typeof (_b = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _b || Object])], Account));

            Dashboard = (function () {
                function Dashboard(app, nav) {
                    _classCallCheck(this, Dashboard);

                    this.app = app;
                    this.nav = nav;
                }

                _createClass(Dashboard, [{
                    key: "goToProfile",
                    value: function goToProfile() {
                        this.nav.push(Profile);
                    }
                }, {
                    key: "logOut",
                    value: function logOut() {
                        this.app.getComponent('root-nav').setRoot(Login, null, {
                            animate: true,
                            direction: 'back'
                        });
                    }
                }]);

                return Dashboard;
            })();

            _export("Dashboard", Dashboard);

            _export("Dashboard", Dashboard = __decorate([Page({
                template: "\n    <ion-navbar *navbar primary>\n      <a menu-toggle>\n        <icon menu></icon>\n      </a>\n      <ion-title>Account Dashboard</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p><button (click)=\"goToProfile()\">Profile</button></p>\n      <p><button (click)=\"logOut()\">Logout</button></p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_c = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _c || Object, typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object])], Dashboard));

            Profile = (function () {
                function Profile(app, nav) {
                    _classCallCheck(this, Profile);

                    this.app = app;
                    this.nav = nav;
                }

                _createClass(Profile, [{
                    key: "goToDashboard",
                    value: function goToDashboard() {
                        this.nav.push(Dashboard);
                    }
                }, {
                    key: "logOut",
                    value: function logOut() {
                        this.app.getComponent('root-nav').setRoot(Login, null, {
                            animate: true,
                            direction: 'back'
                        });
                    }
                }]);

                return Profile;
            })();

            _export("Profile", Profile);

            _export("Profile", Profile = __decorate([Page({
                template: "\n    <ion-navbar *navbar danger>\n      <a menu-toggle>\n        <icon menu></icon>\n      </a>\n      <ion-title>Account Profile</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p><button (click)=\"goToDashboard()\">Dashboard</button></p>\n      <p><button (click)=\"logOut()\">Logout</button></p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof (_e = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _e || Object, typeof (_f = typeof NavController !== 'undefined' && NavController) === 'function' && _f || Object])], Profile));

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);

                this.rootPage = Login;
            };

            E2EApp = __decorate([App({
                template: "<ion-nav id=\"root-nav\" [root]=\"rootPage\" swipe-back-enabled=\"false\"></ion-nav>"
            }), __metadata('design:paramtypes', [])], E2EApp);
        }
    };
});