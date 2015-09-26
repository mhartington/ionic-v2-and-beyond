System.register('ionic/components/tap-click/ripple', ['./activator', '../../util/dom', '../../animations/animation'], function (_export) {
    'use strict';

    var Activator, removeElement, raf, Animation, RippleActivator, NO_RIPPLE_TAGNAMES;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function isRippleElement(targetEle) {
        return targetEle && targetEle.parentNode && !NO_RIPPLE_TAGNAMES.test(targetEle.tagName);
    }
    return {
        setters: [function (_activator) {
            Activator = _activator.Activator;
        }, function (_utilDom) {
            removeElement = _utilDom.removeElement;
            raf = _utilDom.raf;
        }, function (_animationsAnimation) {
            Animation = _animationsAnimation.Animation;
        }],
        execute: function () {
            RippleActivator = (function (_Activator) {
                _inherits(RippleActivator, _Activator);

                function RippleActivator(app, config) {
                    _classCallCheck(this, RippleActivator);

                    _get(Object.getPrototypeOf(RippleActivator.prototype), 'constructor', this).call(this, app, config);
                    this.ripples = {};
                }

                _createClass(RippleActivator, [{
                    key: 'downAction',
                    value: function downAction(targetEle, pointerX, pointerY) {
                        var _this = this;

                        _get(Object.getPrototypeOf(RippleActivator.prototype), 'downAction', this).call(this, targetEle, pointerX, pointerY);
                        if (!isRippleElement(targetEle)) return;
                        // create a new ripple element
                        var r = targetEle.getBoundingClientRect();
                        var x = Math.max(Math.abs(r.width - pointerX), pointerX) * 2;
                        var y = Math.max(Math.abs(r.height - pointerY), pointerY) * 2;
                        var size = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) - 10;
                        var rippleEle = document.createElement('md-ripple');
                        var eleStyle = rippleEle.style;
                        eleStyle.width = size + 'px';
                        eleStyle.height = size + 'px';
                        eleStyle.marginTop = -(size / 2) + 'px';
                        eleStyle.marginLeft = -(size / 2) + 'px';
                        eleStyle.left = pointerX - r.left + 'px';
                        eleStyle.top = pointerY - r.top + 'px';
                        targetEle.appendChild(rippleEle);
                        var ripple = this.ripples[Date.now()] = { ele: rippleEle };
                        // expand the circle from the users starting point
                        // start slow, and when they let up, then speed up the animation
                        ripple.expand = new Animation(rippleEle, { renderDelay: 0 });
                        ripple.expand.fromTo('scale', '0.001', '1').duration(300).playbackRate(0.35).onFinish(function () {
                            // finished expanding
                            ripple.expand && ripple.expand.dispose();
                            ripple.expand = null;
                            ripple.expanded = true;
                            _this.next();
                        }).play();
                        this.next();
                    }
                }, {
                    key: 'upAction',
                    value: function upAction() {
                        var _this2 = this;

                        this.deactivate();
                        var ripple = undefined;
                        for (var rippleId in this.ripples) {
                            ripple = this.ripples[rippleId];
                            if (!ripple.fade) {
                                // ripple has not been let up yet
                                // spped up the rate if the animation is still going
                                setTimeout(function () {
                                    ripple.expand && ripple.expand.playbackRate(1);
                                    ripple.fade = new Animation(ripple.ele);
                                    ripple.fade.fadeOut().duration(750).onFinish(function () {
                                        ripple.fade && ripple.fade.dispose();
                                        ripple.fade = null;
                                        ripple.faded = true;
                                        _this2.next();
                                    }).play();
                                }, 16);
                            }
                        }
                        this.next();
                    }
                }, {
                    key: 'next',
                    value: function next(forceComplete) {
                        var _this3 = this;

                        var ripple = undefined,
                            rippleEle = undefined;

                        var _loop = function (rippleId) {
                            ripple = _this3.ripples[rippleId];
                            if (ripple.expanded && ripple.faded && ripple.ele || forceComplete || parseInt(rippleId) + 5000 < Date.now()) {
                                // finished expanding and the user has lifted the pointer
                                raf(function () {
                                    _this3.remove(rippleId);
                                });
                            }
                        };

                        for (var rippleId in this.ripples) {
                            _loop(rippleId);
                        }
                    }
                }, {
                    key: 'clearState',
                    value: function clearState() {
                        this.deactivate();
                        this.next(true);
                    }
                }, {
                    key: 'remove',
                    value: function remove(rippleId) {
                        var ripple = this.ripples[rippleId];
                        if (ripple) {
                            ripple.expand && ripple.expand.dispose();
                            ripple.fade && ripple.fade.dispose();
                            removeElement(ripple.ele);
                            ripple.ele = ripple.expand = ripple.fade = null;
                            delete this.ripples[rippleId];
                        }
                    }
                }]);

                return RippleActivator;
            })(Activator);

            _export('RippleActivator', RippleActivator);

            NO_RIPPLE_TAGNAMES = /BACKDROP/;
        }
    };
});