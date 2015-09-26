System.register("ionic/platform/contacts/contacts", ["../plugin"], function (_export) {
    "use strict";

    var NativePlugin, __decorate, __metadata, Contacts;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_plugin) {
            NativePlugin = _plugin.NativePlugin;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            Contacts = (function () {
                function Contacts() {
                    _classCallCheck(this, Contacts);
                }

                _createClass(Contacts, null, [{
                    key: "save",
                    value: function save(contact) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            if (!navigator.contacts) {
                                _this.pluginWarn();
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
                }, {
                    key: "remove",
                    value: function remove(contact) {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            if (!navigator.contacts) {
                                _this2.pluginWarn();
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
                }, {
                    key: "clone",
                    value: function clone(contact) {
                        if (!navigator.contacts) {
                            this.pluginWarn();
                            return null;
                        }
                        var deviceContact = navigator.contacts.create(contact);
                        return deviceContact.clone(contact);
                    }
                }, {
                    key: "find",
                    value: function find(options) {
                        return new Promise(function (resolve, reject) {
                            var fields = options.fields || ['id', 'displayName'];
                            delete options.fields;
                            if (Object.keys(options).length === 0) {
                                navigator.contacts.find(fields, function (results) {
                                    resolve(results);
                                }, function (err) {
                                    reject(err);
                                });
                            } else {
                                navigator.contacts.find(fields, function (results) {
                                    resolve(results);
                                }, function (err) {
                                    reject(err);
                                }, options);
                            }
                        });
                    }
                }, {
                    key: "pickContact",
                    value: function pickContact() {
                        return new Promise(function (resolve, reject) {
                            navigator.contacts.pickContact(function (contact) {
                                resolve(contact);
                            }, function (err) {
                                reject(err);
                            });
                        });
                    }
                }]);

                return Contacts;
            })();

            _export("Contacts", Contacts);

            _export("Contacts", Contacts = __decorate([NativePlugin({
                name: 'Contacts',
                platforms: ['ios', 'android'],
                engines: {
                    cordova: 'cordova-plugin-contacts'
                }
            }), __metadata('design:paramtypes', [])], Contacts));
        }
    };
});