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
import { ElementRef, Directive } from 'angular2/angular2';
import { IonicConfig } from '../../config/config';
/**
 * TODO
 */
export let MaterialButton = class {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     * @param {IonicConfig} config  TODO
     */
    constructor(elementRef, config) {
        this.elementRef = elementRef;
        this.config = config;
    }
    onInit() {
        if (this.config.setting('mdRipple')) {
        }
    }
};
MaterialButton = __decorate([
    Directive({
        selector: 'button,[button]'
    }), 
    __metadata('design:paramtypes', [(typeof ElementRef !== 'undefined' && ElementRef) || Object, (typeof IonicConfig !== 'undefined' && IonicConfig) || Object])
], MaterialButton);