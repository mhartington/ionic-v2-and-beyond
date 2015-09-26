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
import { Directive, Self } from 'angular2/angular2';
import { IonicApp } from './app';
/**
 * TODO
 */
export let Register = class {
    /**
     * TODO
     * @param {Object} app  TODO
     */
    constructor(app) {
        this.app = app;
    }
    /**
     * TODO
     */
    onInit() {
        if (this.register && this.registerId) {
            this.app.register(this.registerId, this.register);
        }
    }
};
Register = __decorate([
    Directive({
        selector: '[register]',
        properties: [
            'register',
            'registerId: register-id'
        ],
        host: {
            'this.register-id': 'registerId'
        }
    }), 
    __metadata('design:paramtypes', [(typeof IonicApp !== 'undefined' && IonicApp) || Object])
], Register);
/**
 * TODO
 */
export let Ref = class {
    /**
     * TODO
     * @param {TODO} app  TODO
     * @param {TODO} component  TODO
     */
    constructor(app, component) {
        this.app = app;
        console.log('Register on any', component);
    }
    /**
     * TODO
     */
    onInit() {
        /*
        if (this.register && this.registerId) {
          this.app.register(this.registerId, this.register);
        }
        */
    }
};
Ref = __decorate([
    Directive({
        selector: '[ref]',
        properties: [
            'ref'
        ],
        host: {
            'this.ref': 'refId'
        }
    }),
    __param(1, Self()), 
    __metadata('design:paramtypes', [(typeof IonicApp !== 'undefined' && IonicApp) || Object, Object])
], Ref);