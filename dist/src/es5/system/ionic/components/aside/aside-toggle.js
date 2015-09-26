System.register("ionic/components/aside/aside-toggle", ["angular2/angular2", "../app/app"], function (_export) {
    /**
    * TODO
    */
    "use strict";

    var Directive, IonicApp, __decorate, __metadata, AsideToggle;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
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

            AsideToggle = (function () {
                /**
                * TODO
                * @param {IonicApp} app  TODO
                */

                function AsideToggle(app) {
                    _classCallCheck(this, AsideToggle);

                    this.app = app;
                }

                _createClass(AsideToggle, [{
                    key: "onInit",
                    value: function onInit() {
                        var toggleTarget = this.asideToggle;
                        // Get the component with this toggleTarget tag, or use "menu" if none
                        this.aside = this.app.getComponent(toggleTarget || 'menu');
                    }

                    /**
                    * TODO
                    * @param {TODO} event  TODO
                    */
                }, {
                    key: "toggle",
                    value: function toggle(event) {
                        this.aside && this.aside.toggle();
                        console.log('Aside toggle');
                    }
                }]);

                return AsideToggle;
            })();

            _export("AsideToggle", AsideToggle);

            _export("AsideToggle", AsideToggle = __decorate([Directive({
                selector: '[aside-toggle]',
                properties: ['asideToggle'],
                host: {
                    '(^click)': 'toggle($event)'
                }
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], AsideToggle));
        }
    };
});