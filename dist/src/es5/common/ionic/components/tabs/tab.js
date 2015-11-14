"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _angular2Angular2 = require('angular2/angular2');

var _appApp = require('../app/app');

var _configConfig = require('../../config/config');

var _navNavController = require('../nav/nav-controller');

var _tabs = require('./tabs');

/**
 * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
 * of the Component docs._
 *
 * Tab components are basic navigation controllers used with Tabs.  Much like
 * Nav, they are a subclass of NavController and can be used to navigate
 * to pages in and manipulate the navigation stack of a particular tab.
 *
 * For more information on using navigation controllers like Tab or [Nav](../../nav/Nav/),
 * take a look at the [NavController API reference](../NavController/).
 *
 * See the [Tabs API reference](../Tabs/) for more details on configuring Tabs
 * and the TabBar.
 *
 * Like Nav, you must set a root page to be loaded initially for each Tab with
 * the 'root' property:
 * ```
 * import {GettingStartedPage} from 'getting-started';
 * @App({
 *   template: `<ion-tabs>
 *                <ion-tab [root]="tabOneRoot"></ion-tab>
 *                <ion-tab [root]="tabTwoRoot"></ion-tab>
 *              <ion-tabs>`
 * })
 * class MyApp {
 *   constructor(){
 *     this.tabOneRoot = GettingStartedPage;
 *     this.tabTwoRoot = GettingStartedPage;
 *   }
 * }
 * ```
 * <h3 id="tab_properties">Tab Properties</h3>
 * The Tabs component automatically creates the TabBar from the properties you
 * set on each Tab.
 *
 * To change the title and icon, use the `tab-title` and `tab-icon`
 * inputs:
 * ```html
 * <ion-tabs>
 * 	 <ion-tab tab-title="Home" tab-icon="home" [root]="tabOneRoot"></ion-tab>
 * 	 <ion-tab tab-title="Login" tab-icon="star" [root]="tabTwoRoot"></ion-tab>
 * <ion-tabs>
 * ```
 */
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var Tab = (function (_NavController) {
    _inherits(Tab, _NavController);

    function Tab(tabs, app, config, elementRef, compiler, loader, viewManager, zone, renderer) {
        _classCallCheck(this, Tab);

        // A Tab is a NavController for its child pages
        _get(Object.getPrototypeOf(Tab.prototype), "constructor", this).call(this, tabs, app, config, elementRef, compiler, loader, viewManager, zone, renderer);
        this.tabs = tabs;
        this._isInitial = tabs.add(this);
    }

    _createClass(Tab, [{
        key: "onInit",
        value: function onInit() {
            var _this = this;

            if (this._isInitial) {
                this.tabs.select(this);
            } else if (this.tabs.preloadTabs) {
                setTimeout(function () {
                    if (!_this._loaded) {
                        var opts = {
                            animate: false,
                            preload: true
                        };
                        _this.load(opts, function () {
                            _this.hideNavbars(true);
                        });
                    }
                }, 1000 * this.index);
            }
        }
    }, {
        key: "load",
        value: function load(opts, done) {
            if (!this._loaded && this.root) {
                this.push(this.root, null, opts).then(done);
                this._loaded = true;
            } else {
                done();
            }
        }
    }, {
        key: "loadPage",
        value: function loadPage(viewCtrl, navbarContainerRef, done) {
            // by default a page's navbar goes into the shared tab's navbar section
            navbarContainerRef = this.tabs.navbarContainerRef;
            var isTabSubPage = this.tabs.subPages && viewCtrl.index > 0;
            if (isTabSubPage) {
                // a subpage, that's not the first index
                // should not use the shared tabs navbar section, but use it's own
                navbarContainerRef = null;
            }
            _get(Object.getPrototypeOf(Tab.prototype), "loadPage", this).call(this, viewCtrl, navbarContainerRef, function () {
                if (viewCtrl.instance) {
                    viewCtrl.instance._tabSubPage = isTabSubPage;
                }
                done();
            });
        }
    }, {
        key: "setSelected",
        value: function setSelected(isSelected) {
            this.isSelected = isSelected;
            this.hideNavbars(!isSelected);
        }
    }, {
        key: "hideNavbars",
        value: function hideNavbars(shouldHideNavbars) {
            this._views.forEach(function (viewCtrl) {
                var navbar = viewCtrl.getNavbar();
                navbar && navbar.setHidden(shouldHideNavbars);
            });
        }
    }, {
        key: "index",
        get: function get() {
            return this.tabs.getIndex(this);
        }
    }]);

    return Tab;
})(_navNavController.NavController);
exports.Tab = Tab;
exports.Tab = Tab = __decorate([(0, _angular2Angular2.Component)({
    selector: 'ion-tab',
    inputs: ['root', 'tabTitle', 'tabIcon'],
    host: {
        '[attr.id]': 'panelId',
        '[attr.aria-labelledby]': 'btnId',
        '[class.show-tab]': 'isSelected',
        'role': 'tabpanel'
    },
    template: '<template #contents></template>'
}), __param(0, (0, _angular2Angular2.Host)()), __metadata('design:paramtypes', [typeof (_a = typeof _tabs.Tabs !== 'undefined' && _tabs.Tabs) === 'function' && _a || Object, typeof (_b = typeof _appApp.IonicApp !== 'undefined' && _appApp.IonicApp) === 'function' && _b || Object, typeof (_c = typeof _configConfig.Config !== 'undefined' && _configConfig.Config) === 'function' && _c || Object, typeof (_d = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _d || Object, typeof (_e = typeof _angular2Angular2.Compiler !== 'undefined' && _angular2Angular2.Compiler) === 'function' && _e || Object, typeof (_f = typeof _angular2Angular2.DynamicComponentLoader !== 'undefined' && _angular2Angular2.DynamicComponentLoader) === 'function' && _f || Object, typeof (_g = typeof _angular2Angular2.AppViewManager !== 'undefined' && _angular2Angular2.AppViewManager) === 'function' && _g || Object, typeof (_h = typeof _angular2Angular2.NgZone !== 'undefined' && _angular2Angular2.NgZone) === 'function' && _h || Object, typeof (_j = typeof _angular2Angular2.Renderer !== 'undefined' && _angular2Angular2.Renderer) === 'function' && _j || Object])], Tab);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;