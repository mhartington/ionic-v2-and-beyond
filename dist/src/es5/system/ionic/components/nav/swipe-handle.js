System.register("ionic/components/nav/swipe-handle", ["angular2/angular2", "../view/view-controller", "./pane", "ionic/gestures/gesture"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var ElementRef, Directive, Host, Optional, Inject, forwardRef, NgZone, ViewController, Pane, Gesture, __decorate, __metadata, __param, SwipeHandle;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Directive = _angular2Angular2.Directive;
            Host = _angular2Angular2.Host;
            Optional = _angular2Angular2.Optional;
            Inject = _angular2Angular2.Inject;
            forwardRef = _angular2Angular2.forwardRef;
            NgZone = _angular2Angular2.NgZone;
        }, function (_viewViewController) {
            ViewController = _viewViewController.ViewController;
        }, function (_pane) {
            Pane = _pane.Pane;
        }, function (_ionicGesturesGesture) {
            Gesture = _ionicGesturesGesture.Gesture;
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

            SwipeHandle = (function () {
                /**
                 * TODO
                 * @param {ViewController=} viewCtrl  TODO
                 * @param {Pane} pane  TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {NgZone} ngZone  TODO
                 */

                function SwipeHandle(viewCtrl, pane, elementRef, ngZone) {
                    _classCallCheck(this, SwipeHandle);

                    if (!viewCtrl || !viewCtrl.isSwipeBackEnabled() || !pane) return;
                    var self = this;
                    self.pane = pane;
                    self.viewCtrl = viewCtrl;
                    self.zone = ngZone;
                    this.zone.runOutsideAngular(function () {
                        var gesture = self.gesture = new Gesture(elementRef.nativeElement);
                        gesture.listen();
                        function dragHorizontal(ev) {
                            self.onDragHorizontal(ev);
                        }
                        gesture.on('panend', function (gesture) {
                            self.onDragEnd(gesture);
                        });
                        gesture.on('panleft', dragHorizontal);
                        gesture.on('panright', dragHorizontal);
                    });
                    self.startX = null;
                    self.width = null;
                }

                _createClass(SwipeHandle, [{
                    key: "onDragEnd",
                    value: function onDragEnd(gesture) {
                        var _this = this;

                        gesture.srcEvent.preventDefault();
                        gesture.srcEvent.stopPropagation();
                        // TODO: POLISH THESE NUMBERS WITH GOOD MATHIFICATION
                        var progress = (gesture.center.x - this.startX) / this.width;
                        var completeSwipeBack = progress > 0.5;
                        var playbackRate = 4;
                        if (completeSwipeBack) {
                            // complete swipe back
                            if (progress > 0.9) {
                                playbackRate = 1;
                            } else if (progress > 0.8) {
                                playbackRate = 2;
                            } else if (progress > 0.7) {
                                playbackRate = 3;
                            }
                        } else {
                            // cancel swipe back
                            if (progress < 0.1) {
                                playbackRate = 1;
                            } else if (progress < 0.2) {
                                playbackRate = 2;
                            } else if (progress < 0.3) {
                                playbackRate = 3;
                            }
                        }
                        this.zone.run(function () {
                            _this.viewCtrl.swipeBackFinish(completeSwipeBack, playbackRate);
                        });
                        this.startX = null;
                    }
                }, {
                    key: "onDragHorizontal",
                    value: function onDragHorizontal(gesture) {
                        var _this2 = this;

                        this.zone.run(function () {
                            if (_this2.startX === null) {
                                // starting drag
                                gesture.srcEvent.preventDefault();
                                gesture.srcEvent.stopPropagation();
                                _this2.startX = gesture.center.x;
                                _this2.width = _this2.pane.width() - _this2.startX;
                                _this2.viewCtrl.swipeBackStart();
                            }
                            _this2.viewCtrl.swipeBackProgress((gesture.center.x - _this2.startX) / _this2.width);
                        });
                    }
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.gesture && this.gesture.destroy();
                    }
                }, {
                    key: "showHandle",
                    get: function get() {
                        return this.viewCtrl ? this.viewCtrl.canSwipeBack() : false;
                    }
                }]);

                return SwipeHandle;
            })();

            _export("SwipeHandle", SwipeHandle);

            _export("SwipeHandle", SwipeHandle = __decorate([Directive({
                selector: '.swipe-handle',
                host: {
                    '[class.show-handle]': 'showHandle'
                }
            }), __param(0, Optional()), __param(0, Inject(forwardRef(function () {
                return ViewController;
            }))), __param(1, Host()), __param(1, Inject(forwardRef(function () {
                return Pane;
            }))), __metadata('design:paramtypes', [typeof ViewController !== 'undefined' && ViewController || Object, typeof Pane !== 'undefined' && Pane || Object, typeof ElementRef !== 'undefined' && ElementRef || Object, typeof NgZone !== 'undefined' && NgZone || Object])], SwipeHandle));
        }
    };
});