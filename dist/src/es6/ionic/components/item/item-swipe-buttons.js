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
import { ElementRef, Host, Directive } from 'angular2/angular2';
import { Item } from 'ionic/components/item/item';
import { SlideGesture } from 'ionic/gestures/slide-gesture';
/**
 * @name ionPrimarySwipeButtons
 * @description
 * Creates a swipeable button inside a list item, that is visible when the item is swiped to the left by the user. Swiped open buttons can be hidden with `setOpen(false)`.
 *
 * @usage
 * TODO
 */
export let ItemPrimarySwipeButtons = class {
    /**
     * @param {ElementRef} elementRef  A reference to the component's DOM element.
     * @param {Item} item  The list item containing the swipeable buttons.
     */
    constructor(elementRef, item) {
        item.primarySwipeButtons = this;
        this.ele = elementRef.nativeElement;
        this.item = item;
        this.gesture = new ItemSlideGesture(this);
        this.gesture.listen();
    }
    /**
     * @param {boolean} isOpen  Whether or not the button should be set to open/visible.
     */
    setOpen(isOpen) {
        if (isOpen !== this.isOpen) {
            this.isOpen = isOpen;
            requestAnimationFrame(() => {
                this.ele.classList[isOpen ? 'add' : 'remove'](isOpen);
            });
        }
    }
};
ItemPrimarySwipeButtons = __decorate([
    Directive({
        selector: 'ion-primary-swipe-buttons'
    }),
    __param(1, Host()), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof Item !== 'undefined' && Item) === 'function' && _b) || Object])
], ItemPrimarySwipeButtons);
/**
 * TODO
 */
export let ItemSecondarySwipeButtons = class {
};
ItemSecondarySwipeButtons = __decorate([
    Directive({
        selector: 'ion-secondary-swipe-buttons'
    }), 
    __metadata('design:paramtypes', [])
], ItemSecondarySwipeButtons);
class ItemSlideGesture extends SlideGesture {
    constructor(buttons) {
        super(buttons.item.ele);
        this.buttons = buttons;
    }
    getSlideBoundaries() {
        return {
            min: -this.buttons.ele.offsetWidth,
            max: 0,
        };
    }
    getElementStartPos(slide, ev) {
        return this.buttons.isOpen ? slide.max : slide.min;
    }
    onSlideBeforeStart() {
        this.buttons.ele.classList.add('changing');
        this.buttons.ele.classList.add('no-transition');
        return new Promise(resolve => {
            requestAnimationFrame(resolve);
        });
    }
    onSlide(slide, ev) {
        this.buttons.ele.style.transform = 'translate3d(' + slide.distance + 'px,0,0)';
    }
    onSlideEnd(slide, ev) {
        this.buttons.ele.style.transform = '';
        this.buttons.ele.classList.remove('no-transition');
        if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
            this.buttons.setOpen(!this.buttons.isOpen);
        }
    }
}
var _a, _b;