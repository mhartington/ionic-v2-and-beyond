System.register('ionic/components/tap-click/activator', ['../../util/dom'], function (_export) {
    'use strict';

    var raf, Activator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_utilDom) {
            raf = _utilDom.raf;
        }],
        execute: function () {
            Activator = (function () {
                function Activator(app, config) {
                    _classCallCheck(this, Activator);

                    this.app = app;
                    this.queue = [];
                    this.active = [];
                    this.clearStateTimeout = 180;
                    this.clearAttempt = 0;
                    this.activatedClass = config.setting('activatedClass') || 'activated';
                    this.x = 0;
                    this.y = 0;
                }

                _createClass(Activator, [{
                    key: 'downAction',
                    value: function downAction(targetEle, pointerX, pointerY, callback) {
                        var _this = this;

                        // the user just pressed down
                        // remember where they pressed
                        this.x = pointerX;
                        this.y = pointerY;
                        // queue to have this element activated
                        this.queue.push(targetEle);
                        raf(function () {
                            var targetEle = undefined;
                            for (var i = 0; i < _this.queue.length; i++) {
                                targetEle = _this.queue[i];
                                if (targetEle && targetEle.parentNode) {
                                    _this.active.push(targetEle);
                                    targetEle.classList.add(_this.activatedClass);
                                }
                            }
                            _this.queue = [];
                        });
                    }
                }, {
                    key: 'upAction',
                    value: function upAction() {
                        var _this2 = this;

                        // the user was pressing down, then just let up
                        setTimeout(function () {
                            _this2.clearState();
                        }, this.clearStateTimeout);
                    }
                }, {
                    key: 'clearState',
                    value: function clearState() {
                        // all states should return to normal
                        if ((!this.app.isEnabled() || this.app.isTransitioning()) && this.clearAttempt < 30) {
                            // the app is actively disabled, so don't bother deactivating anything.
                            // this makes it easier on the GPU so it doesn't have to redraw any
                            // buttons during a transition. This will retry in XX milliseconds.
                            ++this.clearAttempt;
                            this.upAction();
                        } else {
                            // not actively transitioning, good to deactivate any elements
                            this.deactivate();
                            this.clearAttempt = 0;
                        }
                    }
                }, {
                    key: 'deactivate',
                    value: function deactivate() {
                        // remove the active class from all active elements
                        for (var i = 0; i < this.active.length; i++) {
                            this.active[i].classList.remove(this.activatedClass);
                        }
                        this.queue = [];
                        this.active = [];
                    }
                }]);

                return Activator;
            })();

            _export('Activator', Activator);
        }
    };
});