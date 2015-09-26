System.register('ionic/components/aside/extensions/types', ['ionic/util/dom'], function (_export) {
    // TODO use setters instead of direct dom manipulation
    'use strict';

    var CSS, asideManipulator, contentManipulator, backdropManipulator, AsideType, AsideTypeOverlay, AsideTypePush, AsideTypeReveal;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ionicUtilDom) {
            CSS = _ionicUtilDom.CSS;
        }],
        execute: function () {
            asideManipulator = {
                setSliding: function setSliding(sliding) {
                    this.aside.getNativeElement().classList[sliding ? 'add' : 'remove']('no-transition');
                },
                setOpen: function setOpen(open) {
                    this.aside.getNativeElement().classList[open ? 'add' : 'remove']('open');
                },
                setTransform: function setTransform(t) {
                    if (t === null) {
                        this.aside.getNativeElement().style[CSS.transform] = '';
                    } else {
                        this.aside.getNativeElement().style[CSS.transform] = 'translate3d(' + t + 'px,0,0)';
                    }
                }
            };
            contentManipulator = {
                setSliding: function setSliding(sliding) {
                    this.aside.contentElement.classList[sliding ? 'add' : 'remove']('no-transition');
                },
                setOpen: function setOpen(open) {
                    this.aside.contentElement.classList[open ? 'add' : 'remove']('aside-open-' + this.aside.side);
                },
                setTransform: function setTransform(t) {
                    if (t === null) {
                        this.aside.contentElement.style[CSS.transform] = '';
                    } else {
                        this.aside.contentElement.style[CSS.transform] = 'translate3d(' + t + 'px,0,0)';
                    }
                }
            };
            backdropManipulator = {
                setSliding: function setSliding(sliding) {
                    this.aside.backdrop.isTransitioning = sliding;
                    //.classList[sliding ? 'add' : 'remove']('no-transition');
                },
                setOpen: function setOpen(open) {
                    var amt = open ? 0.32 : 0;
                    this.aside.backdrop.backgroundColor = 'rgba(0,0,0,' + amt + ')';
                },
                setTransform: function setTransform(t) {
                    if (t === null) {
                        t = this.aside.width();
                    }
                    var fade = 0.32 * t / this.aside.width();
                    this.aside.backdrop.backgroundColor = 'rgba(0,0,0,' + fade + ')';
                }
            };

            AsideType = function AsideType(aside) {
                _classCallCheck(this, AsideType);

                this.aside = aside;
                setTimeout(function () {
                    aside.contentElement.classList.add('aside-content');
                });
            };

            _export('AsideType', AsideType);

            AsideTypeOverlay = (function (_AsideType) {
                _inherits(AsideTypeOverlay, _AsideType);

                function AsideTypeOverlay() {
                    _classCallCheck(this, AsideTypeOverlay);

                    _get(Object.getPrototypeOf(AsideTypeOverlay.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(AsideTypeOverlay, [{
                    key: 'setSliding',
                    value: function setSliding(sliding) {
                        asideManipulator.setSliding.call(this, sliding);
                        backdropManipulator.setSliding.call(this, sliding);
                    }
                }, {
                    key: 'setOpen',
                    value: function setOpen(open) {
                        asideManipulator.setOpen.call(this, open);
                        backdropManipulator.setOpen.call(this, open);
                    }
                }, {
                    key: 'setTransform',
                    value: function setTransform(t) {
                        asideManipulator.setTransform.call(this, t);
                        backdropManipulator.setTransform.call(this, t);
                    }
                }, {
                    key: 'setDoneTransforming',
                    value: function setDoneTransforming(willOpen) {
                        asideManipulator.setTransform.call(this, null);
                        backdropManipulator.setTransform.call(this, null);
                        asideManipulator.setOpen.call(this, willOpen);
                        backdropManipulator.setOpen.call(this, willOpen);
                    }
                }]);

                return AsideTypeOverlay;
            })(AsideType);

            _export('AsideTypeOverlay', AsideTypeOverlay);

            AsideTypePush = (function (_AsideType2) {
                _inherits(AsideTypePush, _AsideType2);

                function AsideTypePush() {
                    _classCallCheck(this, AsideTypePush);

                    _get(Object.getPrototypeOf(AsideTypePush.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(AsideTypePush, [{
                    key: 'setSliding',
                    value: function setSliding(sliding) {
                        asideManipulator.setSliding.call(this, sliding);
                        contentManipulator.setSliding.call(this, sliding);
                    }
                }, {
                    key: 'setOpen',
                    value: function setOpen(open) {
                        asideManipulator.setOpen.call(this, open);
                        contentManipulator.setOpen.call(this, open);
                    }
                }, {
                    key: 'setTransform',
                    value: function setTransform(t) {
                        asideManipulator.setTransform.call(this, t);
                        contentManipulator.setTransform.call(this, t);
                    }
                }, {
                    key: 'setDoneTransforming',
                    value: function setDoneTransforming(willOpen) {
                        asideManipulator.setOpen.call(this, willOpen);
                        asideManipulator.setTransform.call(this, null);
                        contentManipulator.setOpen.call(this, willOpen);
                        contentManipulator.setTransform.call(this, null);
                    }
                }]);

                return AsideTypePush;
            })(AsideType);

            _export('AsideTypePush', AsideTypePush);

            AsideTypeReveal = (function (_AsideType3) {
                _inherits(AsideTypeReveal, _AsideType3);

                function AsideTypeReveal() {
                    _classCallCheck(this, AsideTypeReveal);

                    _get(Object.getPrototypeOf(AsideTypeReveal.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(AsideTypeReveal, [{
                    key: 'setSliding',
                    value: function setSliding(sliding) {
                        contentManipulator.setSliding.call(this, sliding);
                    }
                }, {
                    key: 'setOpen',
                    value: function setOpen(sliding) {
                        console.log('Reveal setting open', sliding);
                        contentManipulator.setOpen.call(this, sliding);
                    }
                }, {
                    key: 'setTransform',
                    value: function setTransform(t) {
                        contentManipulator.setTransform.call(this, t);
                    }
                }, {
                    key: 'setDoneTransforming',
                    value: function setDoneTransforming(willOpen) {
                        contentManipulator.setOpen.call(this, willOpen);
                        contentManipulator.setTransform.call(this, null);
                    }
                }]);

                return AsideTypeReveal;
            })(AsideType);

            _export('AsideTypeReveal', AsideTypeReveal);
        }
    };
});