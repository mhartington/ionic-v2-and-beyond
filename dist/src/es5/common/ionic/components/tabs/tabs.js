"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _angular2Angular2 = require('angular2/angular2');

var _ion = require('../ion');

var _appApp = require('../app/app');

var _appId = require('../app/id');

var _configConfig = require('../../config/config');

var _navViewController = require('../nav/view-controller');

var _configDecorators = require('../../config/decorators');

var _iconIcon = require('../icon/icon');

/**
 * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
 * of the Component docs._
 *
 * The Tabs component is a container with a TabBar and any number of
 * individual Tab components. On iOS, the TabBar is placed on the bottom of
 * the screen, while on Android it is at the top.
 *
 * See the [Tab API reference](../Tab/) for more details on individual Tab components.
 *
 * The TabBar is automatically created for you using the
 * [properties you set on each Tab](../Tab/#tab_properties).
 *
 * To override the platform specific TabBar placement, use the
 * `tabbar-placement` property:
 *
 * ```ts
 * <ion-tabs tabbar-placement="top">
 *   <ion-tab [root]="tabRoot"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * To change the location of the icons in the TabBar, use the `tabbar-icons`
 * property:
 * ```ts
 * <ion-tabs tabbar-icons="bottom">
 *   <ion-tab [root]="tabRoot"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * You can select tabs programatically by injecting Tabs into any child
 * component, and using the [select()](#select) method:
 * ```ts
 * @Page({
 *   template: `<button (click)="goToTabTwo()">Go to Tab2</button>`
 * })
 * class TabOne {
 *   constructor(tabs: Tabs){
 *     this.tabs = tabs;
 *   }
 *
 *   goToTabTwo() {
 *     this.tabs.select(this.tabs.tabs[1]);
 *   }
 * }
 * ```
 * The [tabs](#tabs) property is an array of all child [Tab](../Tab/) components
 * of that Tabs component.
 *
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
var Tabs = (function (_Ion) {
    _inherits(Tabs, _Ion);

    /**
     * Hi, I'm "Tabs". I'm really just another Page, with a few special features.
     * "Tabs" can be a sibling to other pages that can be navigated to, which those
     * sibling pages may or may not have their own tab bars (doesn't matter). The fact
     * that "Tabs" can happen to have children "Tab" classes, and each "Tab" can have
     * children pages with their own "ViewController" instance, as nothing to do with the
     * point that "Tabs" is itself is just a page with its own instance of ViewController.
     */

    function Tabs(app, config, elementRef, viewCtrl) {
        var _this = this;

        _classCallCheck(this, Tabs);

        _get(Object.getPrototypeOf(Tabs.prototype), "constructor", this).call(this, elementRef, config);
        this.app = app;
        this.preload = config.get('preloadTabs');
        this.subPages = config.get('tabSubPages');
        // collection of children "Tab" instances, which extends NavController
        this.tabs = [];
        // Tabs may also be an actual ViewController which was navigated to
        // if Tabs is static and not navigated to within a NavController
        // then skip this and don't treat it as it's own ViewController
        if (viewCtrl) {
            viewCtrl.setContent(this);
            viewCtrl.setContentRef(elementRef);
            // TODO: improve how this works, probably not use promises here
            this.readyPromise = new Promise(function (res) {
                _this.isReady = res;
            });
            viewCtrl.onReady = function () {
                return _this.readyPromise;
            };
        }
    }

    /**
     * @private
     */

    _createClass(Tabs, [{
        key: "add",
        value: function add(tab) {
            tab.id = ++_tabIds;
            tab.btnId = 'tab-' + tab.id;
            tab.panelId = 'tabpanel-' + tab.id;
            this.tabs.push(tab);
            return this.tabs.length === 1;
        }

        /**
         * TODO
         * @param {Tab} tab  TODO
         * @returns {TODO} TODO
         */
    }, {
        key: "select",
        value: function select(tabOrIndex) {
            var _this2 = this;

            var selectedTab = typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex;
            if (!selectedTab) {
                return Promise.reject();
            }
            console.time('select tab ' + selectedTab.id);
            var deselectedTab = this.getSelected();
            if (selectedTab === deselectedTab) {
                // no change
                return this.touchActive(selectedTab);
            }
            var opts = {
                animate: false
            };
            var deselectedPage = undefined;
            if (deselectedTab) {
                deselectedPage = deselectedTab.getActive();
                deselectedPage && deselectedPage.willLeave();
            }
            var selectedPage = selectedTab.getActive();
            selectedPage && selectedPage.willEnter();
            selectedTab.load(opts, function () {
                _this2.tabs.forEach(function (tab) {
                    tab.setSelected(tab === selectedTab);
                });
                _this2.highlight && _this2.highlight.select(selectedTab);
                selectedPage && selectedPage.didEnter();
                deselectedPage && deselectedPage.didLeave();
                _this2.isReady && _this2.isReady();
                console.timeEnd('select tab ' + selectedTab.id);
            });
        }

        /**
         * TODO
         * @param {TODO} index  TODO
         * @returns {TODO} TODO
         */
    }, {
        key: "getByIndex",
        value: function getByIndex(index) {
            if (index < this.tabs.length && index > -1) {
                return this.tabs[index];
            }
            return null;
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i].isSelected) {
                    return this.tabs[i];
                }
            }
            return null;
        }
    }, {
        key: "getIndex",
        value: function getIndex(tab) {
            return this.tabs.indexOf(tab);
        }

        /**
         * @private
         * "Touch" the active tab, going back to the root view of the tab
         * or optionally letting the tab handle the event
         */
    }, {
        key: "touchActive",
        value: function touchActive(tab) {
            var active = tab.getActive();
            if (!active) {
                return Promise.resolve();
            }
            var instance = active.instance;
            // If they have a custom tab selected handler, call it
            if (instance.tabSelected) {
                return instance.tabSelected();
            }
            // If we're a few pages deep, pop to root
            if (tab.length() > 1) {
                // Pop to the root view
                return tab.popToRoot();
            }
            // Otherwise, if the page we're on is not our real root, reset it to our
            // default root type
            if (tab.root != active.componentType) {
                return tab.setRoot(tab.root);
            }
            // And failing all of that, we do something safe and secure
            return Promise.resolve();
        }
    }]);

    return Tabs;
})(_ion.Ion);
exports.Tabs = Tabs;
exports.Tabs = Tabs = __decorate([(0, _configDecorators.ConfigComponent)({
    selector: 'ion-tabs',
    defaultInputs: {
        'tabbarPlacement': 'bottom',
        'tabbarIcons': 'top',
        'tabbarStyle': 'default',
        'preloadTabs': true
    },
    template: '<ion-navbar-section>' + '<template navbar-anchor></template>' + '</ion-navbar-section>' + '<ion-tabbar-section>' + '<tabbar role="tablist" [attr]="tabbarStyle">' + '<a *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">' + '<icon [name]="t.tabIcon" [is-active]="t.isSelected" class="tab-button-icon"></icon>' + '<span class="tab-button-text">{{t.tabTitle}}</span>' + '</a>' + '<tab-highlight></tab-highlight>' + '</tabbar>' + '</ion-tabbar-section>' + '<ion-content-section>' + '<ng-content></ng-content>' + '</ion-content-section>',
    directives: [_iconIcon.Icon, _angular2Angular2.NgFor, _angular2Angular2.NgIf, _appId.Attr, (0, _angular2Angular2.forwardRef)(function () {
        return TabButton;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return TabHighlight;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return TabNavBarAnchor;
    })]
}), __param(3, (0, _angular2Angular2.Optional)()), __metadata('design:paramtypes', [typeof (_a = typeof _appApp.IonicApp !== 'undefined' && _appApp.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _configConfig.Config !== 'undefined' && _configConfig.Config) === 'function' && _b || Object, typeof (_c = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _c || Object, typeof (_d = typeof _navViewController.ViewController !== 'undefined' && _navViewController.ViewController) === 'function' && _d || Object])], Tabs);
var _tabIds = -1;
/**
 * @private
 */
var TabButton = (function (_Ion2) {
    _inherits(TabButton, _Ion2);

    function TabButton(tabs, config, elementRef) {
        _classCallCheck(this, TabButton);

        _get(Object.getPrototypeOf(TabButton.prototype), "constructor", this).call(this, elementRef, config);
        this.tabs = tabs;
        this.disHover = config.get('hoverCSS') === false;
    }

    _createClass(TabButton, [{
        key: "onInit",
        value: function onInit() {
            this.tab.btn = this;
            this.hasTitle = !!this.tab.tabTitle;
            this.hasIcon = !!this.tab.tabIcon;
            this.hasTitleOnly = this.hasTitle && !this.hasIcon;
            this.hasIconOnly = this.hasIcon && !this.hasTitle;
        }
    }, {
        key: "onClick",
        value: function onClick() {
            this.tabs.select(this.tab);
        }
    }]);

    return TabButton;
})(_ion.Ion);
TabButton = __decorate([(0, _angular2Angular2.Directive)({
    selector: '.tab-button',
    inputs: ['tab'],
    host: {
        '[attr.id]': 'tab.btnId',
        '[attr.aria-controls]': 'tab.panelId',
        '[attr.aria-selected]': 'tab.isSelected',
        '[class.has-title]': 'hasTitle',
        '[class.has-icon]': 'hasIcon',
        '[class.has-title-only]': 'hasTitleOnly',
        '[class.icon-only]': 'hasIconOnly',
        '[class.disable-hover]': 'disHover',
        '(click)': 'onClick()'
    }
}), __param(0, (0, _angular2Angular2.Host)()), __metadata('design:paramtypes', [Tabs, typeof (_e = typeof _configConfig.Config !== 'undefined' && _configConfig.Config) === 'function' && _e || Object, typeof (_f = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _f || Object])], TabButton);
/**
 * @private
 */
var TabHighlight = (function () {
    function TabHighlight(tabs, config, elementRef) {
        _classCallCheck(this, TabHighlight);

        if (config.get('mode') === 'md') {
            tabs.highlight = this;
            this.elementRef = elementRef;
        }
    }

    _createClass(TabHighlight, [{
        key: "select",
        value: function select(tab) {
            var d = tab.btn.getDimensions();
            var ele = this.elementRef.nativeElement;
            ele.style.transform = 'translate3d(' + d.left + 'px,0,0) scaleX(' + d.width + ')';
            if (!this.init) {
                this.init = true;
                setTimeout(function () {
                    ele.classList.add('animate');
                }, 64);
            }
        }
    }]);

    return TabHighlight;
})();
TabHighlight = __decorate([(0, _angular2Angular2.Directive)({
    selector: 'tab-highlight'
}), __param(0, (0, _angular2Angular2.Host)()), __metadata('design:paramtypes', [Tabs, typeof (_g = typeof _configConfig.Config !== 'undefined' && _configConfig.Config) === 'function' && _g || Object, typeof (_h = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _h || Object])], TabHighlight);
/**
 * @private
 */
var TabNavBarAnchor = function TabNavBarAnchor(tabs, viewContainerRef) {
    _classCallCheck(this, TabNavBarAnchor);

    tabs.navbarContainerRef = viewContainerRef;
};
TabNavBarAnchor = __decorate([(0, _angular2Angular2.Directive)({ selector: 'template[navbar-anchor]' }), __param(0, (0, _angular2Angular2.Host)()), __metadata('design:paramtypes', [Tabs, typeof (_j = typeof _angular2Angular2.ViewContainerRef !== 'undefined' && _angular2Angular2.ViewContainerRef) === 'function' && _j || Object])], TabNavBarAnchor);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;