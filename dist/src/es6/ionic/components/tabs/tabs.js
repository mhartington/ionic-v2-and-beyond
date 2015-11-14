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
import { Directive, ElementRef, Optional, Host, NgFor, NgIf, forwardRef, ViewContainerRef } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicApp } from '../app/app';
import { Attr } from '../app/id';
import { Config } from '../../config/config';
import { ViewController } from '../nav/view-controller';
import { ConfigComponent } from '../../config/decorators';
import { Icon } from '../icon/icon';
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
export let Tabs = class extends Ion {
    /**
     * Hi, I'm "Tabs". I'm really just another Page, with a few special features.
     * "Tabs" can be a sibling to other pages that can be navigated to, which those
     * sibling pages may or may not have their own tab bars (doesn't matter). The fact
     * that "Tabs" can happen to have children "Tab" classes, and each "Tab" can have
     * children pages with their own "ViewController" instance, as nothing to do with the
     * point that "Tabs" is itself is just a page with its own instance of ViewController.
     */
    constructor(app, config, elementRef, viewCtrl) {
        super(elementRef, config);
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
            this.readyPromise = new Promise(res => { this.isReady = res; });
            viewCtrl.onReady = () => {
                return this.readyPromise;
            };
        }
    }
    /**
     * @private
     */
    add(tab) {
        tab.id = ++_tabIds;
        tab.btnId = 'tab-' + tab.id;
        tab.panelId = 'tabpanel-' + tab.id;
        this.tabs.push(tab);
        return (this.tabs.length === 1);
    }
    /**
     * TODO
     * @param {Tab} tab  TODO
     * @returns {TODO} TODO
     */
    select(tabOrIndex) {
        let selectedTab = (typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex);
        if (!selectedTab) {
            return Promise.reject();
        }
        console.time('select tab ' + selectedTab.id);
        let deselectedTab = this.getSelected();
        if (selectedTab === deselectedTab) {
            // no change
            return this.touchActive(selectedTab);
        }
        let opts = {
            animate: false
        };
        let deselectedPage;
        if (deselectedTab) {
            deselectedPage = deselectedTab.getActive();
            deselectedPage && deselectedPage.willLeave();
        }
        let selectedPage = selectedTab.getActive();
        selectedPage && selectedPage.willEnter();
        selectedTab.load(opts, () => {
            this.tabs.forEach(tab => {
                tab.setSelected(tab === selectedTab);
            });
            this.highlight && this.highlight.select(selectedTab);
            selectedPage && selectedPage.didEnter();
            deselectedPage && deselectedPage.didLeave();
            this.isReady && this.isReady();
            console.timeEnd('select tab ' + selectedTab.id);
        });
    }
    /**
     * TODO
     * @param {TODO} index  TODO
     * @returns {TODO} TODO
     */
    getByIndex(index) {
        if (index < this.tabs.length && index > -1) {
            return this.tabs[index];
        }
        return null;
    }
    getSelected() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].isSelected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    getIndex(tab) {
        return this.tabs.indexOf(tab);
    }
    /**
     * @private
     * "Touch" the active tab, going back to the root view of the tab
     * or optionally letting the tab handle the event
     */
    touchActive(tab) {
        let active = tab.getActive();
        if (!active) {
            return Promise.resolve();
        }
        let instance = active.instance;
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
};
Tabs = __decorate([
    ConfigComponent({
        selector: 'ion-tabs',
        defaultInputs: {
            'tabbarPlacement': 'bottom',
            'tabbarIcons': 'top',
            'tabbarStyle': 'default',
            'preloadTabs': true
        },
        template: '<ion-navbar-section>' +
            '<template navbar-anchor></template>' +
            '</ion-navbar-section>' +
            '<ion-tabbar-section>' +
            '<tabbar role="tablist" [attr]="tabbarStyle">' +
            '<a *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">' +
            '<icon [name]="t.tabIcon" [is-active]="t.isSelected" class="tab-button-icon"></icon>' +
            '<span class="tab-button-text">{{t.tabTitle}}</span>' +
            '</a>' +
            '<tab-highlight></tab-highlight>' +
            '</tabbar>' +
            '</ion-tabbar-section>' +
            '<ion-content-section>' +
            '<ng-content></ng-content>' +
            '</ion-content-section>',
        directives: [
            Icon,
            NgFor,
            NgIf,
            Attr,
            forwardRef(() => TabButton),
            forwardRef(() => TabHighlight),
            forwardRef(() => TabNavBarAnchor)
        ]
    }),
    __param(3, Optional()), 
    __metadata('design:paramtypes', [(typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof Config !== 'undefined' && Config) === 'function' && _b) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof ViewController !== 'undefined' && ViewController) === 'function' && _d) || Object])
], Tabs);
let _tabIds = -1;
/**
 * @private
 */
let TabButton = class extends Ion {
    constructor(tabs, config, elementRef) {
        super(elementRef, config);
        this.tabs = tabs;
        this.disHover = (config.get('hoverCSS') === false);
    }
    onInit() {
        this.tab.btn = this;
        this.hasTitle = !!this.tab.tabTitle;
        this.hasIcon = !!this.tab.tabIcon;
        this.hasTitleOnly = (this.hasTitle && !this.hasIcon);
        this.hasIconOnly = (this.hasIcon && !this.hasTitle);
    }
    onClick() {
        this.tabs.select(this.tab);
    }
};
TabButton = __decorate([
    Directive({
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
            '(click)': 'onClick()',
        }
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Tabs, (typeof (_e = typeof Config !== 'undefined' && Config) === 'function' && _e) || Object, (typeof (_f = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _f) || Object])
], TabButton);
/**
 * @private
 */
let TabHighlight = class {
    constructor(tabs, config, elementRef) {
        if (config.get('mode') === 'md') {
            tabs.highlight = this;
            this.elementRef = elementRef;
        }
    }
    select(tab) {
        let d = tab.btn.getDimensions();
        let ele = this.elementRef.nativeElement;
        ele.style.transform = 'translate3d(' + d.left + 'px,0,0) scaleX(' + d.width + ')';
        if (!this.init) {
            this.init = true;
            setTimeout(() => {
                ele.classList.add('animate');
            }, 64);
        }
    }
};
TabHighlight = __decorate([
    Directive({
        selector: 'tab-highlight'
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Tabs, (typeof (_g = typeof Config !== 'undefined' && Config) === 'function' && _g) || Object, (typeof (_h = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _h) || Object])
], TabHighlight);
/**
 * @private
 */
let TabNavBarAnchor = class {
    constructor(tabs, viewContainerRef) {
        tabs.navbarContainerRef = viewContainerRef;
    }
};
TabNavBarAnchor = __decorate([
    Directive({ selector: 'template[navbar-anchor]' }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Tabs, (typeof (_j = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _j) || Object])
], TabNavBarAnchor);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;