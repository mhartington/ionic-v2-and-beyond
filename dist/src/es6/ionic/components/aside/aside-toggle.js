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
import { Directive } from 'angular2/angular2';
import { IonicApp } from '../app/app';
/**
* TODO
*/
export let AsideToggle = class {
    /**
    * TODO
    * @param {IonicApp} app  TODO
    */
    constructor(app) {
        this.app = app;
    }
    onInit() {
        let toggleTarget = this.asideToggle;
        // Get the component with this toggleTarget tag, or use "menu" if none
        this.aside = this.app.getComponent(toggleTarget || 'menu');
    }
    /**
    * TODO
    * @param {TODO} event  TODO
    */
    toggle(event) {
        this.aside && this.aside.toggle();
        console.log('Aside toggle');
    }
};
AsideToggle = __decorate([
    Directive({
        selector: '[aside-toggle]',
        properties: [
            'asideToggle'
        ],
        host: {
            '(^click)': 'toggle($event)'
        }
    }), 
    __metadata('design:paramtypes', [(typeof IonicApp !== 'undefined' && IonicApp) || Object])
], AsideToggle);