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
import * as util from 'ionic/util';
import { NativePlugin } from '../plugin';
export let Camera = class {
    static getPicture(options) {
        return new Promise((resolve, reject) => {
            if (!navigator.camera) {
                this.pluginWarn();
                resolve(null);
                return;
            }
            var options = util.defaults({
                quality: 80,
                destinationType: window.Camera.DestinationType.DATA_URL,
                sourceType: window.Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: window.Camera.EncodingType.JPEG,
                popoverOptions: window.CameraPopoverOptions,
                saveToPhotoAlbum: false
            }, options);
            navigator.camera.getPicture(function (imageData) {
                resolve(imageData);
            }, function (err) {
                reject(err);
            }, options);
        });
    }
    static cleanup() {
        return new Promise((resolve, reject) => {
            navigator.camera.cleanup(function () {
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    }
};
Camera = __decorate([
    NativePlugin({
        name: 'Camera',
        platforms: ['ios', 'android'],
        engines: {
            cordova: 'cordova-plugin-camera'
        },
        pluginCheck: () => {
            return !!navigator.camera;
        }
    }), 
    __metadata('design:paramtypes', [])
], Camera);