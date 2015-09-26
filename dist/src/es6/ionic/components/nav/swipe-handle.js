var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ElementRef, Directive, Host, Optional, Inject, forwardRef, NgZone } from 'angular2/angular2';
import { ViewController } from '../view/view-controller';
import { Pane } from './pane';
import { Gesture } from 'ionic/gestures/gesture';
/**
 * TODO
 */
export let SwipeHandle = class {
    /**
     * TODO
     * @param {ViewController=} viewCtrl  TODO
     * @param {Pane} pane  TODO
     * @param {ElementRef} elementRef  TODO
     * @param {NgZone} ngZone  TODO
     */
    constructor(viewCtrl, pane, elementRef, ngZone) {
        if (!viewCtrl || !viewCtrl.isSwipeBackEnabled() || !pane)
            return;
        const self = this;
        self.pane = pane;
        self.viewCtrl = viewCtrl;
        self.zone = ngZone;
        this.zone.runOutsideAngular(() => {
            let gesture = self.gesture = new Gesture(elementRef.nativeElement);
            gesture.listen();
            function dragHorizontal(ev) {
                self.onDragHorizontal(ev);
            }
            gesture.on('panend', gesture => { self.onDragEnd(gesture); });
            gesture.on('panleft', dragHorizontal);
            gesture.on('panright', dragHorizontal);
        });
        self.startX = null;
        self.width = null;
    }
    onDragEnd(gesture) {
        gesture.srcEvent.preventDefault();
        gesture.srcEvent.stopPropagation();
        // TODO: POLISH THESE NUMBERS WITH GOOD MATHIFICATION
        let progress = (gesture.center.x - this.startX) / this.width;
        let completeSwipeBack = (progress > 0.5);
        let playbackRate = 4;
        if (completeSwipeBack) {
            // complete swipe back
            if (progress > 0.9) {
                playbackRate = 1;
            }
            else if (progress > 0.8) {
                playbackRate = 2;
            }
            else if (progress > 0.7) {
                playbackRate = 3;
            }
        }
        else {
            // cancel swipe back
            if (progress < 0.1) {
                playbackRate = 1;
            }
            else if (progress < 0.2) {
                playbackRate = 2;
            }
            else if (progress < 0.3) {
                playbackRate = 3;
            }
        }
        this.zone.run(() => {
            this.viewCtrl.swipeBackFinish(completeSwipeBack, playbackRate);
        });
        this.startX = null;
    }
    onDragHorizontal(gesture) {
        this.zone.run(() => {
            if (this.startX === null) {
                // starting drag
                gesture.srcEvent.preventDefault();
                gesture.srcEvent.stopPropagation();
                this.startX = gesture.center.x;
                this.width = this.pane.width() - this.startX;
                this.viewCtrl.swipeBackStart();
            }
            this.viewCtrl.swipeBackProgress((gesture.center.x - this.startX) / this.width);
        });
    }
    get showHandle() {
        return (this.viewCtrl ? this.viewCtrl.canSwipeBack() : false);
    }
    onDestroy() {
        this.gesture && this.gesture.destroy();
    }
};
SwipeHandle = __decorate([
    Directive({
        selector: '.swipe-handle',
        host: {
            '[class.show-handle]': 'showHandle'
        }
    }),
    __param(0, Optional()),
    __param(0, Inject(forwardRef(() => ViewController))),
    __param(1, Host()),
    __param(1, Inject(forwardRef(() => Pane))), 
    __metadata('design:paramtypes', [(typeof ViewController !== 'undefined' && ViewController) || Object, (typeof Pane !== 'undefined' && Pane) || Object, (typeof ElementRef !== 'undefined' && ElementRef) || Object, (typeof NgZone !== 'undefined' && NgZone) || Object])
], SwipeHandle);