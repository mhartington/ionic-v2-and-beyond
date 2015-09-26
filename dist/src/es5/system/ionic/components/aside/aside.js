System.register("ionic/components/aside/aside", ["angular2/angular2", "../ion", "../app/app", "../../config/config", "../../config/annotations", "./extensions/types", "./extensions/gestures", "ionic/util/util", "ionic/util"], function (_export) {
    /**
     * TODO (?) add docs about how to have a root aside and a nested aside, then hide the root one
     */
    "use strict";

    var forwardRef, Component, Host, View, EventEmitter, ElementRef, Ion, IonicApp, IonicConfig, IonicComponent, types, gestures, util, dom, __decorate, __metadata, __param, Aside, AsideBackdrop;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            forwardRef = _angular2Angular2.forwardRef;
            Component = _angular2Angular2.Component;
            Host = _angular2Angular2.Host;
            View = _angular2Angular2.View;
            EventEmitter = _angular2Angular2.EventEmitter;
            ElementRef = _angular2Angular2.ElementRef;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_configAnnotations) {
            IonicComponent = _configAnnotations.IonicComponent;
        }, function (_extensionsTypes) {
            types = _extensionsTypes;
        }, function (_extensionsGestures) {
            gestures = _extensionsGestures;
        }, function (_ionicUtilUtil) {
            util = _ionicUtilUtil;
        }, function (_ionicUtil) {
            dom = _ionicUtil.dom;
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
                            return (d && d(target, key), void 0);
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

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Aside = (function (_Ion) {
                _inherits(Aside, _Ion);

                /**
                * TODO
                * @param {IonicApp} app  TODO
                * @param {ElementRef} elementRef  Reference to the element.
                */

                function Aside(app, elementRef, config) {
                    var _this = this;

                    _classCallCheck(this, Aside);

                    _get(Object.getPrototypeOf(Aside.prototype), "constructor", this).call(this, elementRef, config);
                    this.app = app;
                    this.opening = new EventEmitter('opening');
                    //this.animation = new Animation(element.querySelector('backdrop'));
                    this.contentClickFn = function (e) {
                        if (!_this.isOpen || _this.isChanging) {
                            return;
                        }
                        _this.close();
                    };
                    this.finishChanging = util.debounce(function () {
                        _this.setChanging(false);
                    });
                    // TODO: Use Animation Class
                    this.getNativeElement().addEventListener('transitionend', function (ev) {
                        //this.setChanging(false)
                        clearTimeout(_this.setChangeTimeout);
                        _this.setChangeTimeout = setInterval(_this.finishChanging, 400);
                    });
                }

                /**
                 * TODO
                 */

                _createClass(Aside, [{
                    key: "onDestroy",
                    value: function onDestroy() {
                        app.unregister(this);
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: "onInit",
                    value: function onInit() {
                        var _this2 = this;

                        _get(Object.getPrototypeOf(Aside.prototype), "onInit", this).call(this);
                        this.contentElement = this.content instanceof Node ? this.content : this.content.getNativeElement();
                        if (this.contentElement) {
                            this.contentElement.addEventListener('transitionend', function (ev) {
                                //this.setChanging(false)
                                clearTimeout(_this2.setChangeTimeout);
                                _this2.setChangeTimeout = setInterval(_this2.finishChanging, 400);
                            });
                            this.contentElement.addEventListener('click', this.contentClickFn);
                        } else {
                            console.error('Aside: must have a [content] element to listen for drag events on. Supply one like this:\n\n<ion-aside [content]="content"></ion-aside>\n\n<ion-content #content>');
                        }
                        this.gestureDelegate = this.getDelegate('gesture');
                        this.typeDelegate = this.getDelegate('type');
                    }
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.contentElement.removeEventListener('click', this.contentClickFn);
                    }

                    /**
                     * TODO
                     * @return {Element} The Aside's content element.
                     */
                }, {
                    key: "getContentElement",
                    value: function getContentElement() {
                        return this.contentElement;
                    }

                    /**
                     * TODO
                     * @param {TODO} v  TODO
                     */
                }, {
                    key: "setOpenAmt",
                    value: function setOpenAmt(v) {
                        this.opening.next(v);
                    }

                    /**
                     * TODO
                     * @param {boolean} willOpen  TODO
                     */
                }, {
                    key: "setDoneTransforming",
                    value: function setDoneTransforming(willOpen) {
                        this.typeDelegate.setDoneTransforming(willOpen);
                    }

                    /**
                     * TODO
                     * @param {TODO} transform  TODO
                     */
                }, {
                    key: "setTransform",
                    value: function setTransform(transform) {
                        this.typeDelegate.setTransform(transform);
                    }

                    /**
                     * TODO
                     * @param {boolean} isSliding  TODO
                     */
                }, {
                    key: "setSliding",
                    value: function setSliding(isSliding) {
                        if (isSliding !== this.isSliding) {
                            this.typeDelegate.setSliding(isSliding);
                        }
                    }

                    /**
                     * TODO
                     * @param {boolean} isChanging  TODO
                     */
                }, {
                    key: "setChanging",
                    value: function setChanging(isChanging) {
                        // Stop any last changing end operations
                        clearTimeout(this.setChangeTimeout);
                        if (isChanging !== this.isChanging) {
                            this.isChanging = isChanging;
                            this.getNativeElement().classList[isChanging ? 'add' : 'remove']('changing');
                        }
                    }

                    /**
                     * Sets the state of the Aside to open or not.
                     * @param {boolean} isOpen  If the Aside is open or not.
                     * @return {Promise} TODO
                     */
                }, {
                    key: "setOpen",
                    value: function setOpen(isOpen) {
                        var _this3 = this;

                        if (isOpen !== this.isOpen) {
                            this.isOpen = isOpen;
                            this.setChanging(true);
                            // Set full or closed amount
                            this.setOpenAmt(isOpen ? 1 : 0);
                            return dom.rafPromise().then(function () {
                                _this3.typeDelegate.setOpen(isOpen);
                            });
                        }
                    }

                    /**
                     * TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: "open",
                    value: function open() {
                        return this.setOpen(true);
                    }

                    /**
                     * TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: "close",
                    value: function close() {
                        return this.setOpen(false);
                    }

                    /**
                     * TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: "toggle",
                    value: function toggle() {
                        return this.setOpen(!this.isOpen);
                    }
                }]);

                return Aside;
            })(Ion);

            _export("Aside", Aside);

            _export("Aside", Aside = __decorate([IonicComponent({
                selector: 'ion-aside',
                properties: ['content', 'dragThreshold'],
                defaultProperties: {
                    'side': 'left',
                    'type': 'reveal'
                },
                delegates: {
                    gesture: [
                    //[instance => instance.side == 'top', gestures.TopAsideGesture],
                    //[instance => instance.side == 'bottom', gestures.BottomAsideGesture],
                    [function (instance) {
                        return instance.side == 'right';
                    }, gestures.RightAsideGesture], [function (instance) {
                        return instance.side == 'left';
                    }, gestures.LeftAsideGesture]],
                    type: [[function (instance) {
                        return instance.type == 'overlay';
                    }, types.AsideTypeOverlay], [function (instance) {
                        return instance.type == 'reveal';
                    }, types.AsideTypeReveal]]
                },
                events: ['opening']
            }), View({
                template: '<ng-content></ng-content><ion-aside-backdrop></ion-aside-backdrop>',
                directives: [forwardRef(function () {
                    return AsideBackdrop;
                })]
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof ElementRef !== 'undefined' && ElementRef || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object])], Aside));
            /**
             * TODO
             */

            AsideBackdrop = (function (_Ion2) {
                _inherits(AsideBackdrop, _Ion2);

                /**
                 * TODO
                 * @param {ElementReg} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 * @param {Aside} aside  TODO
                 */

                function AsideBackdrop(elementRef, config, aside) {
                    _classCallCheck(this, AsideBackdrop);

                    _get(Object.getPrototypeOf(AsideBackdrop.prototype), "constructor", this).call(this, elementRef, config);
                    aside.backdrop = this;
                    this.aside = aside;
                    this.backgroundColor = 'rgba(0,0,0,0)';
                }

                /**
                 * TODO
                 */

                _createClass(AsideBackdrop, [{
                    key: "onInit",
                    value: function onInit() {
                        var ww = window.innerWidth;
                        var wh = window.innerHeight;
                        this.width = ww + 'px';
                        this.height = wh + 'px';
                    }

                    /**
                     * TODO
                     * @param {TODO} event  TODO
                     */
                }, {
                    key: "clicked",
                    value: function clicked(event) {
                        this.aside.close();
                    }
                }]);

                return AsideBackdrop;
            })(Ion);

            _export("AsideBackdrop", AsideBackdrop);

            _export("AsideBackdrop", AsideBackdrop = __decorate([Component({
                selector: 'ion-aside-backdrop',
                host: {
                    '[style.width]': 'width',
                    '[style.height]': 'height',
                    '[style.backgroundColor]': 'backgroundColor',
                    '(click)': 'clicked($event)'
                }
            }), View({
                template: ''
            }), __param(2, Host()), __metadata('design:paramtypes', [typeof ElementRef !== 'undefined' && ElementRef || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object, Aside])], AsideBackdrop));
        }
    };
});