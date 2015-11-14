"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _contentContent = require('../content/content');

var _configConfig = require('../../config/config');

/**
 * TODO
 */
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ItemGroup =
/**
 * TODO
 * @param {ElementRef} elementRef  TODO
 */
function ItemGroup(elementRef) {
    _classCallCheck(this, ItemGroup);

    this.ele = elementRef.nativeElement;
};
exports.ItemGroup = ItemGroup;
exports.ItemGroup = ItemGroup = __decorate([(0, _angular2Angular2.Directive)({
    selector: 'ion-item-group',
    host: {
        'class': 'item-group'
    }
}), __metadata('design:paramtypes', [typeof (_a = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _a || Object])], ItemGroup);
/**
 * TODO
 */
var ItemGroupTitle =
/**
 * TODO
 * @param {ElementRef} elementRef  TODO
 */
function ItemGroupTitle(elementRef, zone, config, content) {
    _classCallCheck(this, ItemGroupTitle);

    this.elementRef = elementRef;
    this.zone = zone;
    this.content = content;
    // make sure the sticky class gets set on the title
    this.isSticky = true;
};
exports.ItemGroupTitle = ItemGroupTitle;
exports.ItemGroupTitle = ItemGroupTitle = __decorate([(0, _angular2Angular2.Directive)({
    selector: 'ion-item-group-title',
    host: {
        'class': 'item-group-title',
        '[class.sticky]': 'isSticky'
    }
}), __metadata('design:paramtypes', [typeof (_b = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _b || Object, typeof (_c = typeof _angular2Angular2.NgZone !== 'undefined' && _angular2Angular2.NgZone) === 'function' && _c || Object, typeof (_d = typeof _configConfig.Config !== 'undefined' && _configConfig.Config) === 'function' && _d || Object, typeof (_e = typeof _contentContent.Content !== 'undefined' && _contentContent.Content) === 'function' && _e || Object])], ItemGroupTitle);
var _a, _b, _c, _d, _e;