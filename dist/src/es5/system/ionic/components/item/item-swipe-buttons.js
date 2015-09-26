System.register("ionic/components/item/item-swipe-buttons", ["angular2/angular2", "ionic/components/item/item", "ionic/gestures/slide-gesture"], function (_export) {
    /**
     * @name ionPrimarySwipeButtons
     * @description
     * Creates a swipeable button inside a list item, that is visible when the item is swiped to the left by the user. Swiped open buttons can be hidden with `setOpen(false)`.
     *
     * @usage
     * TODO
     */
    "use strict";

    var ElementRef, Host, Directive, Item, SlideGesture, __decorate, __metadata, __param, ItemPrimarySwipeButtons, ItemSecondarySwipeButtons, ItemSlideGesture, _a, _b;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Host = _angular2Angular2.Host;
            Directive = _angular2Angular2.Directive;
        }, function (_ionicComponentsItemItem) {
            Item = _ionicComponentsItemItem.Item;
        }, function (_ionicGesturesSlideGesture) {
            SlideGesture = _ionicGesturesSlideGesture.SlideGesture;
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

            ItemPrimarySwipeButtons = (function () {
                /**
                 * @param {ElementRef} elementRef  A reference to the component's DOM element.
                 * @param {Item} item  The list item containing the swipeable buttons.
                 */

                function ItemPrimarySwipeButtons(elementRef, item) {
                    _classCallCheck(this, ItemPrimarySwipeButtons);

                    item.primarySwipeButtons = this;
                    this.ele = elementRef.nativeElement;
                    this.item = item;
                    this.gesture = new ItemSlideGesture(this);
                    this.gesture.listen();
                }

                /**
                 * @param {boolean} isOpen  Whether or not the button should be set to open/visible.
                 */

                _createClass(ItemPrimarySwipeButtons, [{
                    key: "setOpen",
                    value: function setOpen(isOpen) {
                        var _this = this;

                        if (isOpen !== this.isOpen) {
                            this.isOpen = isOpen;
                            requestAnimationFrame(function () {
                                _this.ele.classList[isOpen ? 'add' : 'remove'](isOpen);
                            });
                        }
                    }
                }]);

                return ItemPrimarySwipeButtons;
            })();

            _export("ItemPrimarySwipeButtons", ItemPrimarySwipeButtons);

            _export("ItemPrimarySwipeButtons", ItemPrimarySwipeButtons = __decorate([Directive({
                selector: 'ion-primary-swipe-buttons'
            }), __param(1, Host()), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Item !== 'undefined' && Item) === 'function' && _b || Object])], ItemPrimarySwipeButtons));
            /**
             * TODO
             */

            ItemSecondarySwipeButtons = function ItemSecondarySwipeButtons() {
                _classCallCheck(this, ItemSecondarySwipeButtons);
            };

            _export("ItemSecondarySwipeButtons", ItemSecondarySwipeButtons);

            _export("ItemSecondarySwipeButtons", ItemSecondarySwipeButtons = __decorate([Directive({
                selector: 'ion-secondary-swipe-buttons'
            }), __metadata('design:paramtypes', [])], ItemSecondarySwipeButtons));

            ItemSlideGesture = (function (_SlideGesture) {
                _inherits(ItemSlideGesture, _SlideGesture);

                function ItemSlideGesture(buttons) {
                    _classCallCheck(this, ItemSlideGesture);

                    _get(Object.getPrototypeOf(ItemSlideGesture.prototype), "constructor", this).call(this, buttons.item.ele);
                    this.buttons = buttons;
                }

                _createClass(ItemSlideGesture, [{
                    key: "getSlideBoundaries",
                    value: function getSlideBoundaries() {
                        return {
                            min: -this.buttons.ele.offsetWidth,
                            max: 0
                        };
                    }
                }, {
                    key: "getElementStartPos",
                    value: function getElementStartPos(slide, ev) {
                        return this.buttons.isOpen ? slide.max : slide.min;
                    }
                }, {
                    key: "onSlideBeforeStart",
                    value: function onSlideBeforeStart() {
                        this.buttons.ele.classList.add('changing');
                        this.buttons.ele.classList.add('no-transition');
                        return new Promise(function (resolve) {
                            requestAnimationFrame(resolve);
                        });
                    }
                }, {
                    key: "onSlide",
                    value: function onSlide(slide, ev) {
                        this.buttons.ele.style.transform = 'translate3d(' + slide.distance + 'px,0,0)';
                    }
                }, {
                    key: "onSlideEnd",
                    value: function onSlideEnd(slide, ev) {
                        this.buttons.ele.style.transform = '';
                        this.buttons.ele.classList.remove('no-transition');
                        if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
                            this.buttons.setOpen(!this.buttons.isOpen);
                        }
                    }
                }]);

                return ItemSlideGesture;
            })(SlideGesture);
        }
    };
});