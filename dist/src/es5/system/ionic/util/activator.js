System.register('ionic/util/activator', ['./dom'], function (_export) {
    'use strict';

    var raf, pointerCoord, hasPointerMoved, Activator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dom) {
            raf = _dom.raf;
            pointerCoord = _dom.pointerCoord;
            hasPointerMoved = _dom.hasPointerMoved;
        }],
        execute: function () {
            Activator = (function () {
                function Activator(app, config, window, document) {
                    _classCallCheck(this, Activator);

                    var self = this;
                    self.app = app;
                    self.config = config;
                    self.win = window;
                    self.doc = document;
                    self.id = 0;
                    self.queue = {};
                    self.active = {};
                    self.activatedClass = 'activated';
                    self.deactivateTimeout = 180;
                    this.deactivateAttempt = 0;
                    self.pointerTolerance = 4;
                    self.isTouch = false;
                    self.disableClick = 0;
                    self.disableClickLimit = 2500;
                    self.tapPolyfill = config.setting('tapPolyfill');
                    function bindDom(type, listener, useCapture) {
                        document.addEventListener(type, listener, useCapture);
                    }
                    bindDom('click', function (ev) {
                        self.click(ev);
                    }, true);
                    bindDom('touchstart', function (ev) {
                        self.isTouch = true;
                        self.pointerStart(ev);
                    });
                    bindDom('touchend', function (ev) {
                        self.isTouch = true;
                        self.touchEnd(ev);
                    });
                    bindDom('touchcancel', function (ev) {
                        self.isTouch = true;
                        self.pointerCancel(ev);
                    });
                    bindDom('mousedown', function (ev) {
                        self.mouseDown(ev);
                    }, true);
                    bindDom('mouseup', function (ev) {
                        self.mouseUp(ev);
                    }, true);
                    self.pointerMove = function (ev) {
                        var moveCoord = pointerCoord(ev);
                        console.log('pointerMove', moveCoord, self.start);
                        if (hasPointerMoved(10, self.start, moveCoord)) {
                            self.pointerCancel();
                        }
                    };
                    self.moveListeners = function (shouldAdd) {
                        document.removeEventListener('touchmove', self.pointerMove);
                        document.removeEventListener('mousemove', self.pointerMove);
                        if (shouldAdd) {
                            bindDom('touchmove', self.pointerMove);
                            bindDom('mousemove', self.pointerMove);
                        }
                    };
                }

                /**
                 * TODO
                 * @param {TODO} ev  TODO
                 */

                _createClass(Activator, [{
                    key: 'touchEnd',
                    value: function touchEnd(ev) {
                        var self = this;
                        if (self.tapPolyfill && self.start) {
                            var endCoord = pointerCoord(ev);
                            if (!hasPointerMoved(self.pointerTolerance, self.start, endCoord)) {
                                console.debug('create click');
                                self.disableClick = Date.now();
                                var clickEvent = self.doc.createEvent('MouseEvents');
                                clickEvent.initMouseEvent('click', true, true, self.win, 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
                                clickEvent.isIonicTap = true;
                                ev.target.dispatchEvent(clickEvent);
                            }
                        }
                        self.pointerEnd(ev);
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'mouseDown',
                    value: function mouseDown(ev) {
                        if (this.isDisabledClick()) {
                            console.debug('mouseDown prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        } else if (!self.isTouch) {
                            this.pointerStart(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'mouseUp',
                    value: function mouseUp(ev) {
                        if (this.isDisabledClick()) {
                            console.debug('mouseUp prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        if (!self.isTouch) {
                            this.pointerEnd(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'pointerStart',
                    value: function pointerStart(ev) {
                        var targetEle = this.getActivatableTarget(ev.target);
                        if (targetEle) {
                            this.start = pointerCoord(ev);
                            this.queueActivate(targetEle);
                            this.moveListeners(true);
                        } else {
                            this.start = null;
                        }
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'pointerEnd',
                    value: function pointerEnd(ev) {
                        this.queueDeactivate();
                        this.moveListeners(false);
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'pointerCancel',
                    value: function pointerCancel() {
                        console.debug('pointerCancel');
                        this.deactivate();
                        this.moveListeners(false);
                        this.disableClick = Date.now();
                    }
                }, {
                    key: 'isDisabledClick',
                    value: function isDisabledClick() {
                        return this.disableClick + this.disableClickLimit > Date.now();
                    }

                    /**
                     * Whether the supplied click event should be allowed or not.
                     * @param {MouseEvent} ev  The click event.
                     * @return {boolean} True if click event should be allowed, otherwise false.
                     */
                }, {
                    key: 'allowClick',
                    value: function allowClick(ev) {
                        if (!ev.isIonicTap) {
                            if (this.isDisabledClick()) {
                                return false;
                            }
                        }
                        return true;
                    }

                    /**
                     * TODO
                     * @param {MouseEvent} ev  TODO
                     */
                }, {
                    key: 'click',
                    value: function click(ev) {
                        if (!this.allowClick(ev)) {
                            console.debug('click prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        this.isTouch = false;
                    }
                }, {
                    key: 'getActivatableTarget',
                    value: function getActivatableTarget(ele) {
                        var targetEle = ele;
                        for (var x = 0; x < 4; x++) {
                            if (!targetEle) break;
                            if (this.isActivatable(targetEle)) return targetEle;
                            targetEle = targetEle.parentElement;
                        }
                        return null;
                    }
                }, {
                    key: 'isActivatable',
                    value: function isActivatable(ele) {
                        if (/^(A|BUTTON)$/.test(ele.tagName)) {
                            return true;
                        }
                        var attributes = ele.attributes;
                        for (var i = 0, l = attributes.length; i < l; i++) {
                            if (/click|tappable/.test(attributes[i].name)) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'queueActivate',
                    value: function queueActivate(ele) {
                        var self = this;
                        self.queue[++self.id] = ele;
                        if (self.id > 19) self.id = 0;
                        raf(function () {
                            // activate all elements in the queue
                            for (var key in self.queue) {
                                if (self.queue[key]) {
                                    self.queue[key].classList.add(self.activatedClass);
                                    self.active[key] = self.queue[key];
                                }
                            }
                            self.queue = {};
                        });
                    }
                }, {
                    key: 'queueDeactivate',
                    value: function queueDeactivate() {
                        var self = this;
                        setTimeout(function () {
                            self.deactivate();
                        }, this.deactivateTimeout);
                    }
                }, {
                    key: 'deactivate',
                    value: function deactivate() {
                        var self = this;
                        if (this.app.isTransitioning() && this.deactivateAttempt < 10) {
                            // the app is actively transitioning, don't bother deactivating
                            // anything this makes it easier on the GPU so it doesn't
                            // have to redraw any buttons during a transition
                            // retry
                            ++this.deactivateAttempt;
                            this.queueDeactivate();
                        } else {
                            // not actively transitioning, good to deactivate any elements
                            // clear out any elements that are queued to be set to active
                            self.queue = {};
                            // in the next frame, remove the active class from all active elements
                            raf(function () {
                                for (var key in self.active) {
                                    if (self.active[key]) {
                                        self.active[key].classList.remove(self.activatedClass);
                                    }
                                    delete self.active[key];
                                }
                            });
                            this.deactivateAttempt = 0;
                        }
                    }
                }]);

                return Activator;
            })();

            _export('Activator', Activator);
        }
    };
});