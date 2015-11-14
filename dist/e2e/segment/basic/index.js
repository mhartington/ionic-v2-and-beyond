System.register("index", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var FORM_DIRECTIVES, FormBuilder, Validators, App, __decorate, __metadata, MyApp, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            FORM_DIRECTIVES = _angular2Angular2.FORM_DIRECTIVES;
            FormBuilder = _angular2Angular2.FormBuilder;
            Validators = _angular2Angular2.Validators;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
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
                            return d && d(target, key), void 0;
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

            MyApp = (function () {
                function MyApp(fb) {
                    _classCallCheck(this, MyApp);

                    this.myForm = fb.group({
                        mapStyle: ['hybrid', Validators.required]
                    });
                    this.relationship = 'enemies';
                    this.modelStyle = 'B';
                    this.appType = 'free';
                }

                _createClass(MyApp, [{
                    key: "doSubmit",
                    value: function doSubmit(event) {
                        console.log('Submitting form', this.myForm.value);
                        event.preventDefault();
                    }
                }]);

                return MyApp;
            })();

            MyApp = __decorate([App({
                templateUrl: 'main.html',
                providers: [FormBuilder],
                directives: [FORM_DIRECTIVES]
            }), __metadata('design:paramtypes', [typeof (_a = typeof FormBuilder !== 'undefined' && FormBuilder) === 'function' && _a || Object])], MyApp);
        }
    };
});