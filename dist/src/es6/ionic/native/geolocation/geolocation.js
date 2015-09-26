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
import * as Rx from 'rx';
import { NativePlugin } from '../plugin';
export let Geolocation = class {
    static getCurrentPosition(options) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            }, options);
        });
    }
    static watchPosition(options) {
        let watchID;
        let source = Rx.Observable.create((observer) => {
            watchID = navigator.geolocation.watchPosition(function (result) {
                observer.onNext(result);
            }, function (err) {
                observer.onError(err, observer);
            }, options);
        });
        return {
            source: source,
            watchID: watchID,
            clear: () => {
                navigator.geolocation.clearWatch(watchID);
            }
        };
    }
    static clearWatch(watchID) {
        return navigator.geolocation.clearWatch(watchID);
    }
};
Geolocation = __decorate([
    NativePlugin({
        name: 'Geolocation',
        platforms: {
            cordova: 'cordova-plugin-geolocation'
        }
    }), 
    __metadata('design:paramtypes', [])
], Geolocation);