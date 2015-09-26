System.register("ionic/components/item/item-options", [], function (_export) {
    "use strict";

    var __decorate, __metadata, ItemPrimaryOptions, ItemSecondaryOptions;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
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

            /**
             * TODO
             */

            ItemPrimaryOptions = function ItemPrimaryOptions() {
                _classCallCheck(this, ItemPrimaryOptions);
            };

            _export("ItemPrimaryOptions", ItemPrimaryOptions);

            _export("ItemPrimaryOptions", ItemPrimaryOptions = __decorate([
            /**
             * TODO
             */Decorator({
                selector: 'ion-primary-options'
            }), __metadata('design:paramtypes', [])], ItemPrimaryOptions));
            /**
             * TODO
             */

            ItemSecondaryOptions = function ItemSecondaryOptions() {
                _classCallCheck(this, ItemSecondaryOptions);
            };

            _export("ItemSecondaryOptions", ItemSecondaryOptions);

            _export("ItemSecondaryOptions", ItemSecondaryOptions = __decorate([Decorator({
                selector: 'ion-secondary-options'
            }), __metadata('design:paramtypes', [])], ItemSecondaryOptions));
        }
    };
});