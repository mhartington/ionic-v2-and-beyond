System.register("e2e/nav/button/index", ["angular2/angular2"], function (_export) {
    "use strict";

    var Query, QueryList, bootstrap, Component, Directive, View, __decorate, __metadata, __param, Icon, Button, HelloCmp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Query = _angular2Angular2.Query;
            QueryList = _angular2Angular2.QueryList;
            bootstrap = _angular2Angular2.bootstrap;
            Component = _angular2Angular2.Component;
            Directive = _angular2Angular2.Directive;
            View = _angular2Angular2.View;
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

            Icon = function Icon() {
                _classCallCheck(this, Icon);
            };

            Icon = __decorate([Component({
                selector: 'icon'
            }), View({
                template: '♠'
            }), __metadata('design:paramtypes', [])], Icon);

            Button = (function () {
                function Button(icon) {
                    _classCallCheck(this, Button);

                    this.icon = icon;
                    icon.onChange(function () {
                        console.log('button icon', icon);
                    });
                }

                _createClass(Button, [{
                    key: "onInit",
                    value: function onInit() {
                        console.log('Button icon', this.icon);
                    }
                }]);

                return Button;
            })();

            Button = __decorate([Directive({
                selector: 'button'
            }), __param(0, Query(Icon)), __metadata('design:paramtypes', [typeof QueryList !== 'undefined' && QueryList || Object])], Button);

            HelloCmp = function HelloCmp() {
                _classCallCheck(this, HelloCmp);
            };

            _export("HelloCmp", HelloCmp);

            _export("HelloCmp", HelloCmp = __decorate([Component({
                selector: 'ion-app'
            }), View({
                template: "\n    <button><icon></icon> Button</button>\n  ",
                directives: [Button, Icon]
            }), __metadata('design:paramtypes', [])], HelloCmp));
            bootstrap(HelloCmp);
        }
    };
});