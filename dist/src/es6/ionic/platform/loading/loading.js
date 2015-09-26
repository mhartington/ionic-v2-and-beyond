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
import { NativePlugin } from '../plugin';
/**
 * Simple loading popup indicators.
 */
export let Loading = class {
    static simple(dim, label, detail) {
        this.ifPlugin(() => {
            if (typeof label === 'undefined') {
                window.ProgressIndicator.showSimple(dim);
                return;
            }
            if (typeof detail === 'undefined') {
                window.ProgressIndicator.showSimpleWithLabel(dim, label);
                return;
            }
            window.ProgressIndicator.showSimpleWithLabelDetail(dim, label, detail);
        });
    }
    static determinate(dim, timeout, label) {
        this.ifPlugin(() => {
            if (typeof label === 'undefined') {
                window.ProgressIndicator.showDeterminate(dim, timeout);
                return;
            }
            if (typeof detail === 'undefined') {
                window.ProgressIndicator.showSimpleWithLabel(dim, timeout, label);
                return;
            }
        });
    }
    static annular(dim, timeout, label) {
        this.ifPlugin(() => {
            if (typeof label === 'undefined') {
                window.ProgressIndicator.showAnnular(dim, timeout);
                return;
            }
            if (typeof detail === 'undefined') {
                window.ProgressIndicator.showAnnularWithLabel(dim, timeout, label);
                return;
            }
        });
    }
    static bar(dim, timeout, label) {
        this.ifPlugin(() => {
            if (typeof label === 'undefined') {
                window.ProgressIndicator.showBar(dim, timeout);
                return;
            }
            if (typeof detail === 'undefined') {
                window.ProgressIndicator.showBarWithLabel(dim, timeout, label);
                return;
            }
        });
    }
    static success(dim, label) {
        this.ifPlugin(() => {
            window.ProgressIndicator.showSuccess(dim, label);
        });
    }
    static hide() {
        this.ifPlugin(() => {
            window.ProgressIndicator.hide();
        });
    }
};
Loading = __decorate([
    NativePlugin({
        name: 'Loading',
        platforms: ['ios', 'android', 'web'],
        engines: {
            cordova: 'cordova-plugin-progressindicator'
        },
        pluginCheck: () => {
            return !!window.ProgressIndicator;
        }
    }), 
    __metadata('design:paramtypes', [])
], Loading);