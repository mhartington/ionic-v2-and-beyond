System.register('ionic/components/nav/view-controller', ['./nav-controller'], function (_export) {
    /**
     * TODO
     */
    'use strict';

    var NavParams, ViewController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_navController) {
            NavParams = _navController.NavParams;
        }],
        execute: function () {
            ViewController = (function () {
                function ViewController(navCtrl, componentType) {
                    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                    _classCallCheck(this, ViewController);

                    this.navCtrl = navCtrl;
                    this.componentType = componentType;
                    this.params = new NavParams(params);
                    this.instance = null;
                    this.state = 0;
                    this._destroys = [];
                }

                /**
                 * TODO
                 * @returns {boolean} TODO
                 */

                _createClass(ViewController, [{
                    key: 'enableBack',
                    value: function enableBack() {
                        // update if it's possible to go back from this nav item
                        if (this.navCtrl) {
                            var previousItem = this.navCtrl.getPrevious(this);
                            // the previous view may exist, but if it's about to be destroyed
                            // it shouldn't be able to go back to
                            return !!(previousItem && !previousItem.shouldDestroy);
                        }
                        return false;
                    }

                    /**
                     * TODO
                     * @param {TODO} instance  TODO
                     */
                }, {
                    key: 'setInstance',
                    value: function setInstance(instance) {
                        this.instance = instance;
                    }
                }, {
                    key: 'isRoot',
                    value: function isRoot() {
                        return this.index === 0;
                    }
                }, {
                    key: 'addDestroy',
                    value: function addDestroy(destroyFn) {
                        this._destroys.push(destroyFn);
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        for (var i = 0; i < this._destroys.length; i++) {
                            this._destroys[i]();
                        }
                        this._destroys = [];
                    }
                }, {
                    key: 'setNavbarTemplateRef',
                    value: function setNavbarTemplateRef(templateRef) {
                        this._nbTmpRef = templateRef;
                    }
                }, {
                    key: 'getNavbarTemplateRef',
                    value: function getNavbarTemplateRef() {
                        return this._nbTmpRef;
                    }
                }, {
                    key: 'getNavbarViewRef',
                    value: function getNavbarViewRef() {
                        return this._nbVwRef;
                    }
                }, {
                    key: 'setNavbarViewRef',
                    value: function setNavbarViewRef(viewContainerRef) {
                        this._nbVwRef = viewContainerRef;
                    }
                }, {
                    key: 'setPageRef',
                    value: function setPageRef(elementRef) {
                        this._pgRef = elementRef;
                    }
                }, {
                    key: 'pageRef',
                    value: function pageRef() {
                        return this._pgRef;
                    }
                }, {
                    key: 'setContentRef',
                    value: function setContentRef(elementRef) {
                        this._cntRef = elementRef;
                    }
                }, {
                    key: 'contentRef',
                    value: function contentRef() {
                        return this._cntRef;
                    }
                }, {
                    key: 'setContent',
                    value: function setContent(directive) {
                        this._cntDir = directive;
                    }
                }, {
                    key: 'getContent',
                    value: function getContent() {
                        return this._cntDir;
                    }
                }, {
                    key: 'setNavbar',
                    value: function setNavbar(directive) {
                        this._nbDir = directive;
                    }
                }, {
                    key: 'getNavbar',
                    value: function getNavbar() {
                        return this._nbDir;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'hasNavbar',
                    value: function hasNavbar() {
                        return !!this.getNavbar();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarRef',
                    value: function navbarRef() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getElementRef();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'titleRef',
                    value: function titleRef() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getTitleRef();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarItemRefs',
                    value: function navbarItemRefs() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getItemRefs();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'backBtnRef',
                    value: function backBtnRef() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getBackButtonRef();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'backBtnTextRef',
                    value: function backBtnTextRef() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getBackButtonTextRef();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarBgRef',
                    value: function navbarBgRef() {
                        var navbar = this.getNavbar();
                        return navbar && navbar.getNativeElement().querySelector('.toolbar-background');
                    }
                }, {
                    key: 'hideBackButton',
                    value: function hideBackButton(shouldHide) {
                        var navbar = this.getNavbar();
                        if (navbar) {
                            navbar.hideBackButton = !!shouldHide;
                        }
                    }

                    /**
                     * The view has loaded. This event only happens once per view being
                     * created. If a view leaves but is cached, then this will not
                     * fire again on a subsequent viewing. This method is a good place
                     * to put your setup code for the view; however, it is not the
                     * recommended method to use when a view becomes active.
                     */
                }, {
                    key: 'loaded',
                    value: function loaded() {
                        if (!this.shouldDestroy) {
                            this.instance && this.instance.onPageLoaded && this.instance.onPageLoaded();
                        }
                    }

                    /**
                     * The view is about to enter and become the active view.
                     */
                }, {
                    key: 'willEnter',
                    value: function willEnter() {
                        if (!this.shouldDestroy) {
                            this.instance && this.instance.onPageWillEnter && this.instance.onPageWillEnter();
                        }
                    }

                    /**
                     * The view has fully entered and is now the active view. This
                     * will fire, whether it was the first load or loaded from the cache.
                     */
                }, {
                    key: 'didEnter',
                    value: function didEnter() {
                        var navbar = this.getNavbar();
                        navbar && navbar.didEnter();
                        this.instance && this.instance.onPageDidEnter && this.instance.onPageDidEnter();
                    }

                    /**
                     * The view has is about to leave and no longer be the active view.
                     */
                }, {
                    key: 'willLeave',
                    value: function willLeave() {
                        this.instance && this.instance.onPageWillLeave && this.instance.onPageWillLeave();
                    }

                    /**
                     * The view has finished leaving and is no longer the active view. This
                     * will fire, whether it is cached or unloaded.
                     */
                }, {
                    key: 'didLeave',
                    value: function didLeave() {
                        this.instance && this.instance.onPageDidLeave && this.instance.onPageDidLeave();
                    }

                    /**
                     * The view is about to be destroyed and have its elements removed.
                     */
                }, {
                    key: 'willUnload',
                    value: function willUnload() {
                        this.instance && this.instance.onPageWillUnload && this.instance.onPageWillUnload();
                    }

                    /**
                     * The view has been destroyed and its elements have been removed.
                     */
                }, {
                    key: 'didUnload',
                    value: function didUnload() {
                        this.instance && this.instance.onPageDidUnload && this.instance.onPageDidUnload();
                    }
                }, {
                    key: 'domCache',
                    value: function domCache(isActiveView, isPreviousView) {
                        if (this.instance) {
                            this.instance._hidden = !isActiveView && !isPreviousView;
                        }
                    }
                }, {
                    key: 'index',
                    get: function get() {
                        return this.navCtrl ? this.navCtrl.indexOf(this) : -1;
                    }
                }]);

                return ViewController;
            })();

            _export('ViewController', ViewController);
        }
    };
});