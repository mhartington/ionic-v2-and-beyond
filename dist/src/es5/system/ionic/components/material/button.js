System.register("ionic/components/material/button", ["angular2/angular2", "../../config/config"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var ElementRef, Directive, IonicConfig, __decorate, __metadata, MaterialButton;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Directive = _angular2Angular2.Directive;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
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

            MaterialButton = (function () {
                /**
                 * TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 */

                function MaterialButton(elementRef, config) {
                    _classCallCheck(this, MaterialButton);

                    this.elementRef = elementRef;
                    this.config = config;
                }

                _createClass(MaterialButton, [{
                    key: "onInit",
                    value: function onInit() {
                        if (this.config.setting('mdRipple')) {}
                    }
                }]);

                return MaterialButton;
            })();

            _export("MaterialButton", MaterialButton);

            _export("MaterialButton", MaterialButton = __decorate([Directive({
                selector: 'button,[button]'
            }), __metadata('design:paramtypes', [typeof ElementRef !== 'undefined' && ElementRef || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object])], MaterialButton));
        }
    };
});