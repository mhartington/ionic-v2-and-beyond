System.register('ionic/components/view/view-controller', ['angular2/angular2', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/src/core/compiler/view_manager', '../ion', '../../config/config', '../app/app', './view-item', '../nav/nav-controller', '../nav/pane', '../../transitions/transition', './swipe-back', 'ionic/util'], function (_export) {
    /**
     * TODO
     */
    'use strict';

    var Compiler, Injector, bind, DynamicComponentLoader, AppViewManager, Ion, IonicConfig, IonicApp, ViewItem, NavController, PaneController, Transition, SwipeBackGesture, util, ViewController, ACTIVE_STATE, CACHED_STATE, STAGED_ENTERING_STATE, STAGED_LEAVING_STATE, ctrlIds;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Compiler = _angular2Angular2.Compiler;
            Injector = _angular2Angular2.Injector;
            bind = _angular2Angular2.bind;
        }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
            DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
        }, function (_angular2SrcCoreCompilerView_manager) {
            AppViewManager = _angular2SrcCoreCompilerView_manager.AppViewManager;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
        }, function (_viewItem) {
            ViewItem = _viewItem.ViewItem;
        }, function (_navNavController) {
            NavController = _navNavController.NavController;
        }, function (_navPane) {
            PaneController = _navPane.PaneController;
        }, function (_transitionsTransition) {
            Transition = _transitionsTransition.Transition;
        }, function (_swipeBack) {
            SwipeBackGesture = _swipeBack.SwipeBackGesture;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }],
        execute: function () {
            ViewController = (function (_Ion) {
                _inherits(ViewController, _Ion);

                function ViewController(parentViewCtrl, injector, elementRef, zone) {
                    _classCallCheck(this, ViewController);

                    var config = injector.get(IonicConfig);
                    _get(Object.getPrototypeOf(ViewController.prototype), 'constructor', this).call(this, elementRef, config);
                    this.parent = parentViewCtrl;
                    this.compiler = injector.get(Compiler);
                    this.loader = injector.get(DynamicComponentLoader);
                    this.viewMngr = injector.get(AppViewManager);
                    this.app = injector.get(IonicApp);
                    this.config = config;
                    this.zone = zone;
                    this.items = [];
                    this.panes = new PaneController(this);
                    this._sbTrans = null;
                    this.sbEnabled = config.setting('swipeBackEnabled') || false;
                    this.sbThreshold = config.setting('swipeBackThreshold') || 40;
                    this.id = ++ctrlIds;
                    this._ids = -1;
                    this.zIndexes = -1;
                    // build a new injector for child ViewItems to use
                    this.bindings = Injector.resolve([bind(ViewController).toValue(this), bind(NavController).toValue(new NavController(this))]);
                }

                /**
                 * TODO
                 * @param {TODO} componentType  TODO
                 * @param {TODO} [params={}]  TODO
                 * @param {TODO} [opts={}]  TODO
                 * @returns {Promise} TODO
                 */

                _createClass(ViewController, [{
                    key: 'push',
                    value: function push(componentType) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        if (!componentType) {
                            return Promise.reject();
                        }
                        if (typeof componentType !== 'function') {
                            throw 'Loading component must be a component class, not "' + componentType.toString() + '"';
                        }
                        var resolve = undefined;
                        var promise = new Promise(function (res) {
                            resolve = res;
                        });
                        // do not animate if this is the first in the stack
                        if (!this.items.length) {
                            opts.animation = 'none';
                        }
                        // default the direction to "forward"
                        opts.direction = opts.direction || 'forward';
                        // the active item is going to be the leaving one (if one exists)
                        var leavingItem = this.getActive() || new ViewItem();
                        leavingItem.shouldCache = util.isBoolean(opts.cacheLeavingItem) ? opts.cacheLeavingItem : true;
                        leavingItem.shouldDestroy = !leavingItem.shouldCache;
                        if (leavingItem.shouldDestroy) {
                            leavingItem.willUnload();
                        }
                        // create a new ViewItem
                        var enteringItem = new ViewItem(this, componentType, params);
                        // add the item to the stack
                        this.add(enteringItem);
                        if (this.router) {
                            // notify router of the state change
                            this.router.stateChange('push', enteringItem, params);
                        }
                        // start the transition
                        this.transition(enteringItem, leavingItem, opts, function () {
                            resolve();
                        });
                        return promise;
                    }

                    /**
                     * TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'pop',
                    value: function pop() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if (!this.canGoBack()) {
                            return Promise.reject();
                        }
                        var resolve = undefined;
                        var promise = new Promise(function (res) {
                            resolve = res;
                        });
                        // default the direction to "back"
                        opts.direction = opts.direction || 'back';
                        // get the active item and set that it is staged to be leaving
                        // was probably the one popped from the stack
                        var leavingItem = this.getActive() || new ViewItem();
                        leavingItem.shouldCache = util.isBoolean(opts.cacheLeavingItem) ? opts.cacheLeavingItem : false;
                        leavingItem.shouldDestroy = !leavingItem.shouldCache;
                        if (leavingItem.shouldDestroy) {
                            leavingItem.willUnload();
                        }
                        // the entering item is now the new last item
                        // Note: we might not have an entering item if this is the
                        // only item on the history stack.
                        var enteringItem = this.getPrevious(leavingItem);
                        if (enteringItem) {
                            if (this.router) {
                                // notify router of the state change
                                this.router.stateChange('pop', enteringItem);
                            }
                            // start the transition
                            this.transition(enteringItem, leavingItem, opts, function () {
                                // transition completed, destroy the leaving item
                                resolve();
                            });
                        } else {
                            this._transComplete();
                            resolve();
                        }
                        return promise;
                    }

                    /**
                     * Set the item stack to reflect the given component classes.
                     * @param {TODO} components  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'setItems',
                    value: function setItems(components) {
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (!components || !components.length) {
                            return Promise.resolve();
                        }
                        // if animate has not been set then default to false
                        opts.animate = opts.animate || false;
                        // ensure leaving items are not cached, and should be destroyed
                        opts.cacheLeavingItem = false;
                        // get the items to auto remove without having to do a transiton for each
                        // the last item (the currently active one) will do a normal transition out
                        if (this.items.length > 1) {
                            var autoRemoveItems = this.items.slice(0, this.items.length - 1);
                            for (var i = 0; i < autoRemoveItems.length; i++) {
                                autoRemoveItems[i].shouldDestroy = true;
                                autoRemoveItems[i].shouldCache = false;
                                autoRemoveItems[i].willUnload();
                            }
                        }
                        var componentObj = null;
                        var componentType = null;
                        var viewItem = null;
                        // create the ViewItems that go before the new active ViewItem in the stack
                        // but the previous views won't should render yet
                        if (components.length > 1) {
                            var newBeforeItems = components.slice(0, components.length - 1);
                            for (var j = 0; j < newBeforeItems.length; j++) {
                                componentObj = newBeforeItems[j];
                                if (componentObj) {
                                    // could be an object with a componentType property, or it is a componentType
                                    componentType = componentObj.componentType || componentObj;
                                    viewItem = new ViewItem(this, componentType, componentObj.params);
                                    viewItem.state = CACHED_STATE;
                                    viewItem.shouldDestroy = false;
                                    viewItem.shouldCache = false;
                                    // add the item to the stack
                                    this.add(viewItem);
                                }
                            }
                        }
                        // get the component that will become the active item
                        // it'll be the last one in the given components array
                        componentObj = components[components.length - 1];
                        componentType = componentObj.componentType || componentObj;
                        // transition the leaving and entering
                        return this.push(componentType, componentObj.params, opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} componentType  TODO
                     * @param {TODO} [params={}]  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'setRoot',
                    value: function setRoot(componentType) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        return this.setItems([{
                            componentType: componentType,
                            params: params
                        }], opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} enteringItem  TODO
                     * @param {TODO} leavingItem  TODO
                     * @param {TODO} opts  TODO
                     * @param {Function} callback  TODO
                     * @returns {any} TODO
                     */
                }, {
                    key: 'transition',
                    value: function transition(enteringItem, leavingItem, opts, callback) {
                        var _this = this;

                        if (!enteringItem || enteringItem === leavingItem) {
                            return callback();
                        }
                        if (opts.animate === false) {
                            opts.animation = 'none';
                        } else if (!opts.animation) {
                            opts.animation = this.config.setting('viewTransition');
                        }
                        opts.animate = opts.animation !== 'none';
                        // wait for the new item to complete setup
                        enteringItem.stage(function () {
                            _this.zone.runOutsideAngular(function () {
                                enteringItem.shouldDestroy = false;
                                enteringItem.shouldCache = false;
                                enteringItem.willEnter();
                                leavingItem.willLeave();
                                // set that the new item pushed on the stack is staged to be entering/leaving
                                // staged state is important for the transition to find the correct item
                                enteringItem.state = STAGED_ENTERING_STATE;
                                leavingItem.state = STAGED_LEAVING_STATE;
                                // init the transition animation
                                var transAnimation = Transition.create(_this, opts);
                                if (!opts.animate) {
                                    // force it to not animate the elements, just apply the "to" styles
                                    transAnimation.duration(0);
                                }
                                var duration = transAnimation.duration();
                                if (duration > 64) {
                                    // block any clicks during the transition and provide a
                                    // fallback to remove the clickblock if something goes wrong
                                    _this.app.setEnabled(false, duration);
                                }
                                // start the transition
                                transAnimation.play().then(function () {
                                    // transition has completed, update each item's state
                                    enteringItem.state = ACTIVE_STATE;
                                    leavingItem.state = CACHED_STATE;
                                    // dispose any items that shouldn't stay around
                                    transAnimation.dispose();
                                    enteringItem.didEnter();
                                    leavingItem.didLeave();
                                    // all done!
                                    _this.zone.run(function () {
                                        _this._transComplete();
                                        callback();
                                    });
                                });
                            });
                        });
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'swipeBackStart',
                    value: function swipeBackStart() {
                        var _this2 = this;

                        if (!this.app.isEnabled() || !this.canSwipeBack()) {
                            return;
                        }
                        // disables the app during the transition
                        this.app.setEnabled(false);
                        // default the direction to "back"
                        var opts = {
                            direction: 'back'
                        };
                        // get the active item and set that it is staged to be leaving
                        // was probably the one popped from the stack
                        var leavingItem = this.getActive() || new ViewItem();
                        leavingItem.shouldDestroy = true;
                        leavingItem.shouldCache = false;
                        leavingItem.willLeave();
                        leavingItem.willUnload();
                        // the entering item is now the new last item
                        var enteringItem = this.getPrevious(leavingItem);
                        enteringItem.shouldDestroy = false;
                        enteringItem.shouldCache = false;
                        enteringItem.willEnter();
                        // wait for the new item to complete setup
                        enteringItem.stage(function () {
                            _this2.zone.runOutsideAngular(function () {
                                // set that the new item pushed on the stack is staged to be entering/leaving
                                // staged state is important for the transition to find the correct item
                                enteringItem.state = STAGED_ENTERING_STATE;
                                leavingItem.state = STAGED_LEAVING_STATE;
                                // init the swipe back transition animation
                                _this2._sbTrans = Transition.create(_this2, opts);
                                _this2._sbTrans.easing('linear').progressStart();
                            });
                        });
                    }

                    /**
                     * TODO
                     * @param {TODO} progress  TODO
                     */
                }, {
                    key: 'swipeBackProgress',
                    value: function swipeBackProgress(value) {
                        if (this._sbTrans) {
                            // continue to disable the app while actively dragging
                            this.app.setEnabled(false, 4000);
                            // set the transition animation's progress
                            this._sbTrans.progress(value);
                        }
                    }

                    /**
                     * @private
                     * @param {TODO} completeSwipeBack  Should the swipe back complete or not.
                     * @param {number} rate  How fast it closes
                     */
                }, {
                    key: 'swipeBackEnd',
                    value: function swipeBackEnd(completeSwipeBack, rate) {
                        var _this3 = this;

                        if (!this._sbTrans) return;
                        // disables the app during the transition
                        this.app.setEnabled(false);
                        this._sbTrans.progressEnd(completeSwipeBack, rate).then(function () {
                            _this3.zone.run(function () {
                                // find the items that were entering and leaving
                                var enteringItem = _this3.getStagedEnteringItem();
                                var leavingItem = _this3.getStagedLeavingItem();
                                if (enteringItem && leavingItem) {
                                    // finish up the animation
                                    if (completeSwipeBack) {
                                        // swipe back has completed navigating back
                                        // update each item's state
                                        enteringItem.state = ACTIVE_STATE;
                                        leavingItem.state = CACHED_STATE;
                                        enteringItem.didEnter();
                                        leavingItem.didLeave();
                                        if (_this3.router) {
                                            // notify router of the pop state change
                                            _this3.router.stateChange('pop', enteringItem);
                                        }
                                    } else {
                                        // cancelled the swipe back, they didn't end up going back
                                        // return items to their original state
                                        leavingItem.state = ACTIVE_STATE;
                                        enteringItem.state = CACHED_STATE;
                                        leavingItem.willEnter();
                                        leavingItem.didEnter();
                                        enteringItem.didLeave();
                                        leavingItem.shouldDestroy = false;
                                        enteringItem.shouldDestroy = false;
                                    }
                                }
                                // empty out and dispose the swipe back transition animation
                                _this3._sbTrans && _this3._sbTrans.dispose();
                                _this3._sbTrans = null;
                                // all done!
                                _this3._transComplete();
                            });
                        });
                    }
                }, {
                    key: '_runSwipeBack',
                    value: function _runSwipeBack() {
                        if (this.canSwipeBack()) {
                            // it is possible to swipe back
                            if (this.sbGesture) {
                                // this is already an active gesture, don't create another one
                                return;
                            }
                            var opts = {
                                edge: 'left',
                                threshold: this.sbThreshold
                            };
                            this.sbGesture = new SwipeBackGesture(this.getNativeElement(), opts, this);
                            console.debug('SwipeBackGesture listen');
                            this.sbGesture.listen();
                        } else if (this.sbGesture) {
                            // it is not possible to swipe back and there is an
                            // active sbGesture, so unlisten it
                            console.debug('SwipeBackGesture unlisten');
                            this.sbGesture.unlisten();
                            this.sbGesture = null;
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} val  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isSwipeBackEnabled',
                    value: function isSwipeBackEnabled(val) {
                        if (arguments.length) {
                            this.sbEnabled = !!val;
                        }
                        return this.sbEnabled;
                    }

                    /**
                     * If it's possible to use swipe back or not. If it's not possible
                     * to go back, or swipe back is not enable then this will return false.
                     * If it is possible to go back, and swipe back is enabled, then this
                     * will return true.
                     * @returns {boolean}
                     */
                }, {
                    key: 'canSwipeBack',
                    value: function canSwipeBack() {
                        return this.sbEnabled && this.canGoBack();
                    }

                    /**
                     * Returns `true` if there's a valid previous view that we can pop back to.
                     * Otherwise returns false.
                     * @returns {boolean}
                     */
                }, {
                    key: 'canGoBack',
                    value: function canGoBack() {
                        var activeItem = this.getActive();
                        if (activeItem) {
                            return activeItem.enableBack();
                        }
                        return false;
                    }

                    /**
                     * @private
                     */
                }, {
                    key: '_transComplete',
                    value: function _transComplete() {
                        var _this4 = this;

                        var destroys = [];
                        this.items.forEach(function (item) {
                            if (item) {
                                if (item.shouldDestroy) {
                                    destroys.push(item);
                                } else if (item.state === CACHED_STATE && item.shouldCache) {
                                    item.shouldCache = false;
                                }
                            }
                        });
                        destroys.forEach(function (item) {
                            _this4.remove(item);
                            item.destroy();
                        });
                        // allow clicks again, but still set an enable time
                        // meaning nothing with this view controller can happen for XXms
                        this.app.setEnabled(true);
                        if (this.items.length === 1) {
                            this.elementRef.nativeElement.classList.add('has-views');
                        }
                        this._runSwipeBack();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getActive',
                    value: function getActive() {
                        for (var i = 0, ii = this.items.length; i < ii; i++) {
                            if (this.items[i].state === ACTIVE_STATE) {
                                return this.items[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} instance  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getByInstance',
                    value: function getByInstance(instance) {
                        if (instance) {
                            for (var i = 0, ii = this.items.length; i < ii; i++) {
                                if (this.items[i].instance === instance) {
                                    return this.items[i];
                                }
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} index  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getByIndex',
                    value: function getByIndex(index) {
                        if (index < this.items.length && index > -1) {
                            return this.items[index];
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getPrevious',
                    value: function getPrevious(item) {
                        if (item) {
                            return this.items[this.items.indexOf(item) - 1];
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getStagedEnteringItem',
                    value: function getStagedEnteringItem() {
                        for (var i = 0, ii = this.items.length; i < ii; i++) {
                            if (this.items[i].state === STAGED_ENTERING_STATE) {
                                return this.items[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getStagedLeavingItem',
                    value: function getStagedLeavingItem() {
                        for (var i = 0, ii = this.items.length; i < ii; i++) {
                            if (this.items[i].state === STAGED_LEAVING_STATE) {
                                return this.items[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} nbContainer  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarViewContainer',
                    value: function navbarViewContainer(nbContainer) {
                        if (nbContainer) {
                            this._nbContainer = nbContainer;
                        }
                        if (this._nbContainer) {
                            return this._nbContainer;
                        }
                        if (this.parent) {
                            return this.parent.navbarViewContainer();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'anchorElementRef',
                    value: function anchorElementRef() {
                        if (arguments.length) {
                            this._anchorER = arguments[0];
                        }
                        return this._anchorER;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'anchorViewContainerRef',
                    value: function anchorViewContainerRef() {
                        if (arguments.length) {
                            this._anchorVC = arguments[0];
                        }
                        return this._anchorVC;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'childNavbar',
                    value: function childNavbar() {
                        if (arguments.length) {
                            this._childNavbar = arguments[0];
                        }
                        return this._childNavbar;
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'add',
                    value: function add(item) {
                        item.id = this.id + '-' + ++this._ids;
                        this.items.push(item);
                    }

                    /**
                     * TODO
                     * @param {TODO} itemOrIndex  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'remove',
                    value: function remove(itemOrIndex) {
                        util.array.remove(this.items, itemOrIndex);
                    }

                    /**
                     * First view item in this view controller's stack. This would
                     * not return an item which is about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'first',
                    value: function first() {
                        for (var i = 0, l = this.items.length; i < l; i++) {
                            if (!this.items[i].shouldDestroy) {
                                return this.items[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * Last view item in this view controller's stack. This would
                     * not return an item which is about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'last',
                    value: function last() {
                        for (var i = this.items.length - 1; i >= 0; i--) {
                            if (!this.items[i].shouldDestroy) {
                                return this.items[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'indexOf',
                    value: function indexOf(item) {
                        return this.items.indexOf(item);
                    }

                    /**
                     * Number of sibling view items in the view controller. This does
                     * not include items which are about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'length',
                    value: function length() {
                        var len = 0;
                        for (var i = 0, l = this.items.length; i < l; i++) {
                            if (!this.items[i].shouldDestroy) {
                                len++;
                            }
                        }
                        return len;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'instances',
                    value: function instances() {
                        var instances = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var item = _step.value;

                                if (item.instance) {
                                    instances.push(item.instance);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        return instances;
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isActive',
                    value: function isActive(item) {
                        return item && item.state === ACTIVE_STATE;
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isStagedEntering',
                    value: function isStagedEntering(item) {
                        return item && item.state === STAGED_ENTERING_STATE;
                    }

                    /**
                     * TODO
                     * @param {TODO} router  TODO
                     */
                }, {
                    key: 'registerRouter',
                    value: function registerRouter(router) {
                        this.router = router;
                    }
                }]);

                return ViewController;
            })(Ion);

            _export('ViewController', ViewController);

            ACTIVE_STATE = 1;
            CACHED_STATE = 2;
            STAGED_ENTERING_STATE = 3;
            STAGED_LEAVING_STATE = 4;
            ctrlIds = -1;
        }
    };
});