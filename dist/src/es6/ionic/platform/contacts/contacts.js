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
export let Contacts = class {
    static save(contact) {
        return new Promise((resolve, reject) => {
            if (!navigator.contacts) {
                this.pluginWarn();
                reject('Contacts plugin not installed');
            }
            var deviceContact = navigator.contacts.create(contact);
            deviceContact.save(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
    }
    static remove(contact) {
        return new Promise((resolve, reject) => {
            if (!navigator.contacts) {
                this.pluginWarn();
                reject('Contacts plugin not installed');
            }
            var deviceContact = navigator.contacts.create(contact);
            deviceContact.remove(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
    }
    static clone(contact) {
        if (!navigator.contacts) {
            this.pluginWarn();
            return null;
        }
        var deviceContact = navigator.contacts.create(contact);
        return deviceContact.clone(contact);
    }
    static find(options) {
        return new Promise((resolve, reject) => {
            var fields = options.fields || ['id', 'displayName'];
            delete options.fields;
            if (Object.keys(options).length === 0) {
                navigator.contacts.find(fields, function (results) {
                    resolve(results);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                navigator.contacts.find(fields, function (results) {
                    resolve(results);
                }, function (err) {
                    reject(err);
                }, options);
            }
        });
    }
    static pickContact() {
        return new Promise((resolve, reject) => {
            navigator.contacts.pickContact(function (contact) {
                resolve(contact);
            }, function (err) {
                reject(err);
            });
        });
    }
};
Contacts = __decorate([
    NativePlugin({
        name: 'Contacts',
        platforms: ['ios', 'android'],
        engines: {
            cordova: 'cordova-plugin-contacts'
        }
    }), 
    __metadata('design:paramtypes', [])
], Contacts);