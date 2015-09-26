System.register("ionic/components/action-menu/action-menu", ["angular2/angular2", "../icon/icon", "../overlay/overlay", "../../animations/animation", "ionic/util"], function (_export) {
    /**
    * @ngdoc service
    * @name ActionMenu
    * @module ionic
    * @description
    * The ActionMenu is a modal menu with options to select based on an action.
    */

    /**
     * @name ActionMenu
     * @description
     * The Action Menu is a slide-up pane that lets the user choose from a set of options. Dangerous options are made obvious.
     *
     * There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.
     *
     * @usage
     * ```ts
     * openMenu() {
     *
     *   this.actionMenu.open({
     *     buttons: [
     *       { text: 'Share This' },
     *       { text: 'Move' }
     *     ],
     *     destructiveText: 'Delete',
     *     titleText: 'Modify your album',
     *     cancelText: 'Cancel',
     *     cancel: function() {
     *       console.log('Canceled');
     *     },
     *     destructiveButtonClicked: () => {
     *       console.log('Destructive clicked');
     *     },
     *     buttonClicked: function(index) {
     *       console.log('Button clicked', index);
     *       if(index == 1) { return false; }
     *       return true;
     *     }
     *
     *   }).then(actionMenuRef => {
     *     this.actionMenuRef = actionMenuRef;
     *   });
     *
     * }
     * ```
     */
    "use strict";

    var View, Injectable, NgFor, NgIf, Icon, Overlay, Animation, util, __decorate, __metadata, ActionMenuDirective, ActionMenu, OVERLAY_TYPE, ActionMenuAnimation, ActionMenuSlideIn, ActionMenuSlideOut, ActionMenuMdSlideIn, ActionMenuMdSlideOut;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            View = _angular2Angular2.View;
            Injectable = _angular2Angular2.Injectable;
            NgFor = _angular2Angular2.NgFor;
            NgIf = _angular2Angular2.NgIf;
        }, function (_iconIcon) {
            Icon = _iconIcon.Icon;
        }, function (_overlayOverlay) {
            Overlay = _overlayOverlay.Overlay;
        }, function (_animationsAnimation) {
            Animation = _animationsAnimation.Animation;
        }, function (_ionicUtil) {
            util = _ionicUtil;
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

            ActionMenuDirective = (function () {
                function ActionMenuDirective() {
                    _classCallCheck(this, ActionMenuDirective);
                }

                _createClass(ActionMenuDirective, [{
                    key: "_cancel",
                    value: function _cancel() {
                        this.cancel && this.cancel();
                        return this.overlayRef.close();
                    }
                }, {
                    key: "_destructive",
                    value: function _destructive() {
                        var shouldClose = this.destructiveButtonClicked();
                        if (shouldClose === true) {
                            return this.overlayRef.close();
                        }
                    }
                }, {
                    key: "_buttonClicked",
                    value: function _buttonClicked(index) {
                        var shouldClose = this.buttonClicked(index);
                        if (shouldClose === true) {
                            return this.overlayRef.close();
                        }
                    }
                }]);

                return ActionMenuDirective;
            })();

            ActionMenuDirective = __decorate([View({
                template: '<backdrop (click)="_cancel()" tappable></backdrop>' + '<action-menu-wrapper>' + '<div class="action-menu-container">' + '<div class="action-menu-group action-menu-options">' + '<div class="action-menu-title" *ng-if="titleText">{{titleText}}</div>' + '<button (click)="_buttonClicked(index)" *ng-for="#b of buttons; #index = index" class="action-menu-option">' + '<icon [name]="b.icon" *ng-if="b.icon"></icon> ' + '{{b.text}}' + '</button>' + '<button *ng-if="destructiveText" (click)="_destructive()" class="destructive action-menu-destructive">' + '<icon [name]="destructiveIcon" *ng-if="destructiveIcon"></icon> ' + '{{destructiveText}}</button>' + '</div>' + '<div class="action-menu-group action-menu-cancel" *ng-if="cancelText">' + '<button (click)="_cancel()">' + '<icon [name]="cancelIcon"></icon> ' + '{{cancelText}}</button>' + '</div>' + '</div>' + '</action-menu-wrapper>',
                directives: [NgFor, NgIf, Icon]
            }), __metadata('design:paramtypes', [])], ActionMenuDirective);

            ActionMenu = (function (_Overlay) {
                _inherits(ActionMenu, _Overlay);

                function ActionMenu() {
                    _classCallCheck(this, ActionMenu);

                    _get(Object.getPrototypeOf(ActionMenu.prototype), "constructor", this).apply(this, arguments);
                }

                _createClass(ActionMenu, [{
                    key: "open",

                    /**
                     * Create and open a new Action Menu. This is the
                     * public API, and most often you will only use ActionMenu.open()
                     *
                     * @param {Object} [opts={}]  TODO
                     * @return {Promise} Promise that resolves when the action menu is open.
                     */
                    value: function open() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var config = this.config;
                        var defaults = {
                            enterAnimation: config.setting('actionMenuEnter'),
                            leaveAnimation: config.setting('actionMenuLeave'),
                            cancelIcon: config.setting('actionMenuCancelIcon'),
                            destructiveIcon: config.setting('actionMenuDestructiveIcon')
                        };
                        var context = util.extend(defaults, opts);
                        return this.create(OVERLAY_TYPE, ActionMenuDirective, context, context);
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "get",
                    value: function get() {
                        return this.getByType(OVERLAY_TYPE);
                    }
                }]);

                return ActionMenu;
            })(Overlay);

            _export("ActionMenu", ActionMenu);

            _export("ActionMenu", ActionMenu = __decorate([Injectable(), __metadata('design:paramtypes', [])], ActionMenu));
            OVERLAY_TYPE = 'action-menu';

            /**
             * Animations for action sheet
             */

            ActionMenuAnimation = (function (_Animation) {
                _inherits(ActionMenuAnimation, _Animation);

                function ActionMenuAnimation(element) {
                    _classCallCheck(this, ActionMenuAnimation);

                    _get(Object.getPrototypeOf(ActionMenuAnimation.prototype), "constructor", this).call(this, element);
                    this.easing('cubic-bezier(.36, .66, .04, 1)').duration(450);
                    this.backdrop = new Animation(element.querySelector('backdrop'));
                    this.wrapper = new Animation(element.querySelector('action-menu-wrapper'));
                    this.add(this.backdrop, this.wrapper);
                }

                return ActionMenuAnimation;
            })(Animation);

            ActionMenuSlideIn = (function (_ActionMenuAnimation) {
                _inherits(ActionMenuSlideIn, _ActionMenuAnimation);

                function ActionMenuSlideIn(element) {
                    _classCallCheck(this, ActionMenuSlideIn);

                    _get(Object.getPrototypeOf(ActionMenuSlideIn.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.01, 0.4);
                    this.wrapper.fromTo('translateY', '100%', '0%');
                }

                return ActionMenuSlideIn;
            })(ActionMenuAnimation);

            Animation.register('action-menu-slide-in', ActionMenuSlideIn);

            ActionMenuSlideOut = (function (_ActionMenuAnimation2) {
                _inherits(ActionMenuSlideOut, _ActionMenuAnimation2);

                function ActionMenuSlideOut(element) {
                    _classCallCheck(this, ActionMenuSlideOut);

                    _get(Object.getPrototypeOf(ActionMenuSlideOut.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.4, 0.01);
                    this.wrapper.fromTo('translateY', '0%', '100%');
                }

                return ActionMenuSlideOut;
            })(ActionMenuAnimation);

            Animation.register('action-menu-slide-out', ActionMenuSlideOut);

            ActionMenuMdSlideIn = (function (_ActionMenuSlideIn) {
                _inherits(ActionMenuMdSlideIn, _ActionMenuSlideIn);

                function ActionMenuMdSlideIn(element) {
                    _classCallCheck(this, ActionMenuMdSlideIn);

                    _get(Object.getPrototypeOf(ActionMenuMdSlideIn.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.01, 0.26);
                }

                return ActionMenuMdSlideIn;
            })(ActionMenuSlideIn);

            Animation.register('action-menu-md-slide-in', ActionMenuMdSlideIn);

            ActionMenuMdSlideOut = (function (_ActionMenuSlideOut) {
                _inherits(ActionMenuMdSlideOut, _ActionMenuSlideOut);

                function ActionMenuMdSlideOut(element) {
                    _classCallCheck(this, ActionMenuMdSlideOut);

                    _get(Object.getPrototypeOf(ActionMenuMdSlideOut.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.26, 0.01);
                }

                return ActionMenuMdSlideOut;
            })(ActionMenuSlideOut);

            Animation.register('action-menu-md-slide-out', ActionMenuMdSlideOut);
        }
    };
});