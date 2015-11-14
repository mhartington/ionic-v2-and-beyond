System.register("ionic/components/item/item-group", ["angular2/angular2", "../content/content", "../../config/config"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, ElementRef, NgZone, Content, Config, __decorate, __metadata, ItemGroup, ItemGroupTitle, _a, _b, _c, _d, _e;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
            NgZone = _angular2Angular2.NgZone;
        }, function (_contentContent) {
            Content = _contentContent.Content;
        }, function (_configConfig) {
            Config = _configConfig.Config;
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

            ItemGroup =
            /**
             * TODO
             * @param {ElementRef} elementRef  TODO
             */
            function ItemGroup(elementRef) {
                _classCallCheck(this, ItemGroup);

                this.ele = elementRef.nativeElement;
            };

            _export("ItemGroup", ItemGroup);

            _export("ItemGroup", ItemGroup = __decorate([Directive({
                selector: 'ion-item-group',
                host: {
                    'class': 'item-group'
                }
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object])], ItemGroup));
            /**
             * TODO
             */

            ItemGroupTitle =
            /**
             * TODO
             * @param {ElementRef} elementRef  TODO
             */
            function ItemGroupTitle(elementRef, zone, config, content) {
                _classCallCheck(this, ItemGroupTitle);

                this.elementRef = elementRef;
                this.zone = zone;
                this.content = content;
                // make sure the sticky class gets set on the title
                this.isSticky = true;
            };

            _export("ItemGroupTitle", ItemGroupTitle);

            _export("ItemGroupTitle", ItemGroupTitle = __decorate([Directive({
                selector: 'ion-item-group-title',
                host: {
                    'class': 'item-group-title',
                    '[class.sticky]': 'isSticky'
                }
            }), __metadata('design:paramtypes', [typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof NgZone !== 'undefined' && NgZone) === 'function' && _c || Object, typeof (_d = typeof Config !== 'undefined' && Config) === 'function' && _d || Object, typeof (_e = typeof Content !== 'undefined' && Content) === 'function' && _e || Object])], ItemGroupTitle));
        }
    };
});