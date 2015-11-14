System.register("index", ["ionic/ionic", "angular2/angular2"], function (_export) {
    //
    // Tab 1
    //
    "use strict";

    var App, Page, NavController, Tab, QueryList, ViewChildren, __decorate, __metadata, Tab1, Tab2, Tab3, QuesaritoPage, TabsPage, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            Page = _ionicIonic.Page;
            NavController = _ionicIonic.NavController;
            Tab = _ionicIonic.Tab;
        }, function (_angular2Angular2) {
            QueryList = _angular2Angular2.QueryList;
            ViewChildren = _angular2Angular2.ViewChildren;
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

            Tab1 = function Tab1(nav) {
                _classCallCheck(this, Tab1);

                this.nav = nav;
            };

            Tab1 = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <ion-title>Heart</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h2>Tab 1</h2>\n    </ion-content>\n    "
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object])], Tab1);
            //
            // Tab 2
            //

            Tab2 = function Tab2(nav) {
                _classCallCheck(this, Tab2);

                this.nav = nav;
            };

            Tab2 = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <ion-title>Star</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h2>Tab 2</h2>\n    </ion-content>\n    "
            }), __metadata('design:paramtypes', [typeof (_b = typeof NavController !== 'undefined' && NavController) === 'function' && _b || Object])], Tab2);
            //
            // Tab 3
            //

            Tab3 = function Tab3(nav) {
                _classCallCheck(this, Tab3);

                this.nav = nav;
            };

            Tab3 = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <a menu-toggle>\n        <icon menu></icon>\n      </a>\n      <ion-title>Stopwatch</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h2>Tab 3</h2>\n    </ion-content>\n    "
            }), __metadata('design:paramtypes', [typeof (_c = typeof NavController !== 'undefined' && NavController) === 'function' && _c || Object])], Tab3);
            //
            // Tab 3
            //

            QuesaritoPage = function QuesaritoPage(nav) {
                _classCallCheck(this, QuesaritoPage);

                this.nav = nav;
            };

            QuesaritoPage = __decorate([Page({
                template: "\n    <ion-navbar *navbar>\n      <a menu-toggle>\n        <icon menu></icon>\n      </a>\n      <ion-title>Quesarito</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h2>Quesarito</h2>\n    </ion-content>\n    "
            }), __metadata('design:paramtypes', [typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object])], QuesaritoPage);

            TabsPage = (function () {
                function TabsPage() {
                    _classCallCheck(this, TabsPage);

                    this.root1 = Tab1;
                    this.root2 = Tab2;
                    this.root3 = Tab3;
                }

                _createClass(TabsPage, [{
                    key: "afterViewInit",
                    value: function afterViewInit() {
                        console.log('Tab', this.tab);
                        console.log(this.tab.first.setRoot);
                    }
                }, {
                    key: "openPage",
                    value: function openPage(which) {
                        var pages = {
                            'quesarito': QuesaritoPage
                        };
                        this.tab.first.setRoot(pages[which]);
                    }
                }, {
                    key: "onInit",
                    value: function onInit() {}
                }]);

                return TabsPage;
            })();

            _export("TabsPage", TabsPage);

            __decorate([ViewChildren(Tab), __metadata('design:type', typeof (_e = typeof QueryList !== 'undefined' && QueryList) === 'function' && _e || Object)], TabsPage.prototype, "tab");
            _export("TabsPage", TabsPage = __decorate([App({
                template: "\n    <ion-menu [content]=\"content\">\n      <ion-toolbar secondary>\n        <ion-title>Secret Menu</ion-title>\n      </ion-toolbar>\n      <ion-content>\n        <ion-list>\n          <button ion-item menu-close detail-none (click)=\"openPage('quesarito')\">\n            Quesarito\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-tabs #content>\n      <ion-tab tab-title=\"Heart\" tab-icon=\"heart\" [root]=\"root1\" #tab1></ion-tab>\n      <ion-tab tab-title=\"Star\" tab-icon=\"star\" [root]=\"root2\"></ion-tab>\n      <ion-tab tab-title=\"Stopwatch\" tab-icon=\"stopwatch\" [root]=\"root3\"></ion-tab>\n    </ion-tabs>\n  "
            }), __metadata('design:paramtypes', [])], TabsPage));
        }
    };
});