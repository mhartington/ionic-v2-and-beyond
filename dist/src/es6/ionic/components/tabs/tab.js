var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Host, ElementRef, Compiler, DynamicComponentLoader, AppViewManager, NgZone, Renderer } from 'angular2/angular2';
import { IonicApp } from '../app/app';
import { Config } from '../../config/config';
import { NavController } from '../nav/nav-controller';
import { Tabs } from './tabs';
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
export let Tab = class extends NavController {
    constructor(tabs, app, config, elementRef, compiler, loader, viewManager, zone, renderer) {
        // A Tab is a NavController for its child pages
        super(tabs, app, config, elementRef, compiler, loader, viewManager, zone, renderer);
        this.tabs = tabs;
        this._isInitial = tabs.add(this);
    }
    onInit() {
        if (this._isInitial) {
            this.tabs.select(this);
        }
        else if (this.tabs.preloadTabs) {
            setTimeout(() => {
                if (!this._loaded) {
                    let opts = {
                        animate: false,
                        preload: true
                    };
                    this.load(opts, () => {
                        this.hideNavbars(true);
                    });
                }
            }, 1000 * this.index);
        }
    }
    load(opts, done) {
        if (!this._loaded && this.root) {
            this.push(this.root, null, opts).then(done);
            this._loaded = true;
        }
        else {
            done();
        }
    }
    loadPage(viewCtrl, navbarContainerRef, done) {
        // by default a page's navbar goes into the shared tab's navbar section
        navbarContainerRef = this.tabs.navbarContainerRef;
        let isTabSubPage = (this.tabs.subPages && viewCtrl.index > 0);
        if (isTabSubPage) {
            // a subpage, that's not the first index
            // should not use the shared tabs navbar section, but use it's own
            navbarContainerRef = null;
        }
        super.loadPage(viewCtrl, navbarContainerRef, () => {
            if (viewCtrl.instance) {
                viewCtrl.instance._tabSubPage = isTabSubPage;
            }
            done();
        });
    }
    setSelected(isSelected) {
        this.isSelected = isSelected;
        this.hideNavbars(!isSelected);
    }
    hideNavbars(shouldHideNavbars) {
        this._views.forEach(viewCtrl => {
            let navbar = viewCtrl.getNavbar();
            navbar && navbar.setHidden(shouldHideNavbars);
        });
    }
    get index() {
        return this.tabs.getIndex(this);
    }
};
Tab = __decorate([
    Component({
        selector: 'ion-tab',
        inputs: [
            'root',
            'tabTitle',
            'tabIcon'
        ],
        host: {
            '[attr.id]': 'panelId',
            '[attr.aria-labelledby]': 'btnId',
            '[class.show-tab]': 'isSelected',
            'role': 'tabpanel'
        },
        template: '<template #contents></template>'
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [(typeof (_a = typeof Tabs !== 'undefined' && Tabs) === 'function' && _a) || Object, (typeof (_b = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _b) || Object, (typeof (_c = typeof Config !== 'undefined' && Config) === 'function' && _c) || Object, (typeof (_d = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _d) || Object, (typeof (_e = typeof Compiler !== 'undefined' && Compiler) === 'function' && _e) || Object, (typeof (_f = typeof DynamicComponentLoader !== 'undefined' && DynamicComponentLoader) === 'function' && _f) || Object, (typeof (_g = typeof AppViewManager !== 'undefined' && AppViewManager) === 'function' && _g) || Object, (typeof (_h = typeof NgZone !== 'undefined' && NgZone) === 'function' && _h) || Object, (typeof (_j = typeof Renderer !== 'undefined' && Renderer) === 'function' && _j) || Object])
], Tab);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;