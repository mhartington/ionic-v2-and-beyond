System.register("index", ["ionic/ionic"], function (_export) {
  //
  // Tab 1
  //
  "use strict";

  var App, Page, NavController, __decorate, __metadata, Tab1, Tab2, Tab3, TabsPage, _a;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_ionicIonic) {
      App = _ionicIonic.App;
      Page = _ionicIonic.Page;
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
        this.items = [];
        for (var i = 1; i <= 250; i++) {
          this.items.push(i);
        }
      };

      Tab1 = __decorate([Page({
        template: "\n    <ion-navbar *navbar>\n      <ion-title>Heart</ion-title>\n    </ion-navbar>\n    <ion-content>\n      <ion-list>\n        <ion-header>\n          Tab 1\n        </ion-header>\n        <ion-item *ng-for=\"#i of items\">Item {{i}} {{i}} {{i}} {{i}}</ion-item>\n      </ion-list>\n    </ion-content>\n    "
      }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object])], Tab1);
      //
      // Tab 2
      //

      Tab2 = function Tab2() {
        _classCallCheck(this, Tab2);

        this.sessions = [];
        for (var i = 1; i <= 250; i++) {
          this.sessions.push({
            name: 'Name ' + i,
            location: 'Location: ' + i
          });
        }
      };

      Tab2 = __decorate([Page({
        template: "\n    <ion-navbar *navbar>\n      <ion-title>Schedule</ion-title>\n    </ion-navbar>\n    <ion-content>\n      <ion-list>\n        <ion-item-sliding *ng-for=\"#session of sessions\" #sliding-item>\n          <ion-item>\n            <h3>{{session.name}} {{session.name}} {{session.name}}</h3>\n            <p>{{session.location}} {{session.location}} {{session.location}}</p>\n          </ion-item>\n          <ion-item-options>\n            <button primary>Speaker<br>Info</button>\n            <button secondary>Add to<br>Favorites</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-content>\n  "
      }), __metadata('design:paramtypes', [])], Tab2);
      //
      // Tab 3
      //

      Tab3 = function Tab3() {
        _classCallCheck(this, Tab3);
      };

      Tab3 = __decorate([Page({
        template: "\n    <ion-navbar *navbar>\n      <a menu-toggle>\n        <icon menu></icon>\n      </a>\n      <ion-title>Stopwatch</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h2>Tab 3</h2>\n    </ion-content>\n    "
      }), __metadata('design:paramtypes', [])], Tab3);

      TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);

        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
      };

      _export("TabsPage", TabsPage);

      _export("TabsPage", TabsPage = __decorate([App({
        template: "\n    <ion-menu [content]=\"content\">\n      <ion-toolbar secondary>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n      <ion-content>\n        <ion-list>\n          <button ion-item menu-close detail-none>\n            Close Menu\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-tabs #content tabbar-style=\"secondary\">\n      <ion-tab tab-title=\"Plain List\" tab-icon=\"star\" [root]=\"root1\"></ion-tab>\n      <ion-tab tab-title=\"Schedule\" tab-icon=\"globe\" [root]=\"root2\"></ion-tab>\n      <ion-tab tab-title=\"Stopwatch\" tab-icon=\"stopwatch\" [root]=\"root3\"></ion-tab>\n    </ion-tabs>\n  "
      }), __metadata('design:paramtypes', [])], TabsPage));
    }
  };
});