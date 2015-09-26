System.register('ionic/components/aside/extensions/gestures', ['ionic/gestures/slide-edge-gesture'], function (_export) {
    'use strict';

    var SlideEdgeGesture, AsideTargetGesture, AsideGesture, LeftAsideGesture, RightAsideGesture;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicGesturesSlideEdgeGesture) {
            SlideEdgeGesture = _ionicGesturesSlideEdgeGesture.SlideEdgeGesture;
        }],
        execute: function () {
            AsideTargetGesture = (function (_SlideEdgeGesture) {
                _inherits(AsideTargetGesture, _SlideEdgeGesture);

                function AsideTargetGesture(aside) {
                    _classCallCheck(this, AsideTargetGesture);

                    var asideElement = aside.getNativeElement();
                    _get(Object.getPrototypeOf(AsideTargetGesture.prototype), 'constructor', this).call(this, asideElement, {
                        direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
                        edge: aside.side,
                        threshold: 0
                    });
                    this.aside = aside;
                }

                _createClass(AsideTargetGesture, [{
                    key: 'canStart',
                    value: function canStart(ev) {
                        return this.aside.isOpen;
                    }

                    // Set CSS, then wait one frame for it to apply before sliding starts
                }, {
                    key: 'onSlideBeforeStart',
                    value: function onSlideBeforeStart(slide, ev) {
                        this.aside.setSliding(true);
                        this.aside.setChanging(true);
                        return new Promise(function (resolve) {
                            requestAnimationFrame(resolve);
                        });
                    }
                }, {
                    key: 'onSlide',
                    value: function onSlide(slide, ev) {
                        this.aside.setOpenAmt(slide.distance / slide.max);
                        this.aside.setTransform(slide.distance);
                    }
                }, {
                    key: 'onSlideEnd',
                    value: function onSlideEnd(slide, ev) {
                        this.aside.setSliding(false);
                        if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
                            this.aside.setOpen(!this.aside.isOpen);
                            this.aside.setDoneTransforming(!this.aside.isOpen);
                        } else {
                            this.aside.setDoneTransforming(this.aside.isOpen);
                        }
                    }
                }, {
                    key: 'getElementStartPos',
                    value: function getElementStartPos(slide, ev) {
                        return this.aside.isOpen ? slide.max : slide.min;
                    }
                }, {
                    key: 'getSlideBoundaries',
                    value: function getSlideBoundaries() {
                        return {
                            min: 0,
                            max: this.aside.width()
                        };
                    }
                }]);

                return AsideTargetGesture;
            })(SlideEdgeGesture);

            AsideGesture = (function (_SlideEdgeGesture2) {
                _inherits(AsideGesture, _SlideEdgeGesture2);

                function AsideGesture(aside) {
                    _classCallCheck(this, AsideGesture);

                    // TODO figure out the sliding element, dont just use the parent
                    var contentElement = aside.getContentElement();
                    _get(Object.getPrototypeOf(AsideGesture.prototype), 'constructor', this).call(this, contentElement, {
                        direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
                        edge: aside.side,
                        threshold: 75
                    });
                    this.aside = aside;
                    this.slideElement = contentElement;
                    this.listen();
                    var contentGesture = new AsideTargetGesture(aside);
                    contentGesture.listen();
                }

                _createClass(AsideGesture, [{
                    key: 'canStart',
                    value: function canStart(ev) {
                        // Only restrict edges if the aside is closed
                        return this.aside.isOpen ? true : _get(Object.getPrototypeOf(AsideGesture.prototype), 'canStart', this).call(this, ev);
                    }

                    // Set CSS, then wait one frame for it to apply before sliding starts
                }, {
                    key: 'onSlideBeforeStart',
                    value: function onSlideBeforeStart(slide, ev) {
                        this.aside.setSliding(true);
                        this.aside.setChanging(true);
                        return new Promise(function (resolve) {
                            requestAnimationFrame(resolve);
                        });
                    }
                }, {
                    key: 'onSlide',
                    value: function onSlide(slide, ev) {
                        this.aside.setOpenAmt(slide.distance / slide.max);
                        this.aside.setTransform(slide.distance);
                    }
                }, {
                    key: 'onSlideEnd',
                    value: function onSlideEnd(slide, ev) {
                        this.aside.setSliding(false);
                        if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
                            this.aside.setOpen(!this.aside.isOpen);
                            this.aside.setDoneTransforming(!this.aside.isOpen);
                        } else {
                            this.aside.setDoneTransforming(false);
                        }
                    }
                }, {
                    key: 'getElementStartPos',
                    value: function getElementStartPos(slide, ev) {
                        return this.aside.isOpen ? slide.max : slide.min;
                    }
                }, {
                    key: 'getSlideBoundaries',
                    value: function getSlideBoundaries() {
                        return {
                            min: 0,
                            max: this.aside.width()
                        };
                    }
                }]);

                return AsideGesture;
            })(SlideEdgeGesture);

            LeftAsideGesture = (function (_AsideGesture) {
                _inherits(LeftAsideGesture, _AsideGesture);

                function LeftAsideGesture() {
                    _classCallCheck(this, LeftAsideGesture);

                    _get(Object.getPrototypeOf(LeftAsideGesture.prototype), 'constructor', this).apply(this, arguments);
                }

                return LeftAsideGesture;
            })(AsideGesture);

            _export('LeftAsideGesture', LeftAsideGesture);

            RightAsideGesture = (function (_LeftAsideGesture) {
                _inherits(RightAsideGesture, _LeftAsideGesture);

                function RightAsideGesture() {
                    _classCallCheck(this, RightAsideGesture);

                    _get(Object.getPrototypeOf(RightAsideGesture.prototype), 'constructor', this).apply(this, arguments);
                }

                /*
                 Not supported right now
                export class TopAsideGesture extends AsideGesture {
                  onSlide(slide, ev) {
                    this.aside.setTransform(slide.distance);
                  }
                  getSlideBoundaries() {
                    return {
                      min: 0,
                      max: this.aside.height()
                    };
                  }
                }
                
                export class BottomAsideGesture extends TopAsideGesture {
                  getElementStartPos(slide, ev) {
                    return this.aside.isOpen ? slide.min : slide.max;
                  }
                  getSlideBoundaries() {
                    return {
                      min: -this.aside.height(),
                      max: 0
                    };
                  }
                }
                */

                _createClass(RightAsideGesture, [{
                    key: 'getElementStartPos',
                    value: function getElementStartPos(slide, ev) {
                        return this.aside.isOpen ? slide.min : slide.max;
                    }
                }, {
                    key: 'getSlideBoundaries',
                    value: function getSlideBoundaries() {
                        return {
                            min: -this.aside.width(),
                            max: 0
                        };
                    }
                }]);

                return RightAsideGesture;
            })(LeftAsideGesture);

            _export('RightAsideGesture', RightAsideGesture);
        }
    };
});