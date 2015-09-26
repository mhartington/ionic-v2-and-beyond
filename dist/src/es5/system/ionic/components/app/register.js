System.register("ionic/components/app/register", ["angular2/angular2", "./app"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, Self, IonicApp, __decorate, __metadata, __param, Register, Ref;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Self = _angular2Angular2.Self;
        }, function (_app) {
            IonicApp = _app.IonicApp;
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

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Register = (function () {
                /**
                 * TODO
                 * @param {Object} app  TODO
                 */

                function Register(app) {
                    _classCallCheck(this, Register);

                    this.app = app;
                }

                /**
                 * TODO
                 */

                _createClass(Register, [{
                    key: "onInit",
                    value: function onInit() {
                        if (this.register && this.registerId) {
                            this.app.register(this.registerId, this.register);
                        }
                    }
                }]);

                return Register;
            })();

            _export("Register", Register);

            _export("Register", Register = __decorate([Directive({
                selector: '[register]',
                properties: ['register', 'registerId: register-id'],
                host: {
                    'this.register-id': 'registerId'
                }
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], Register));
            /**
             * TODO
             */

            Ref = (function () {
                /**
                 * TODO
                 * @param {TODO} app  TODO
                 * @param {TODO} component  TODO
                 */

                function Ref(app, component) {
                    _classCallCheck(this, Ref);

                    this.app = app;
                    console.log('Register on any', component);
                }

                /**
                 * TODO
                 */

                _createClass(Ref, [{
                    key: "onInit",
                    value: function onInit() {
                        /*
                        if (this.register && this.registerId) {
                          this.app.register(this.registerId, this.register);
                        }
                        */
                    }
                }]);

                return Ref;
            })();

            _export("Ref", Ref);

            _export("Ref", Ref = __decorate([Directive({
                selector: '[ref]',
                properties: ['ref'],
                host: {
                    'this.ref': 'refId'
                }
            }), __param(1, Self()), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, Object])], Ref));
        }
    };
});