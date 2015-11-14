System.register("index", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var ProtoViewRef, ViewContainerRef, Directive, Host, forwardRef, App, List, __decorate, __metadata, __param, IonicApp, ItemCellTemplate, _a, _b, _c;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ProtoViewRef = _angular2Angular2.ProtoViewRef;
            ViewContainerRef = _angular2Angular2.ViewContainerRef;
            Directive = _angular2Angular2.Directive;
            Host = _angular2Angular2.Host;
            forwardRef = _angular2Angular2.forwardRef;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            List = _ionicIonic.List;
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

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            IonicApp = function IonicApp() {
                _classCallCheck(this, IonicApp);

                this.items = [];
                for (var i = 0; i < 1000; i++) {
                    this.items.push({
                        title: 'Item ' + i
                    });
                }
            };

            IonicApp = __decorate([App({
                templateUrl: 'main.html',
                directives: [forwardRef(function () {
                    return ItemCellTemplate;
                })]
            }), __metadata('design:paramtypes', [])], IonicApp);
            /*
              Used to find and register headers in a view, and this directive's
              content will be moved up to the common navbar location, and created
              using the same context as the view's content area.
            */

            ItemCellTemplate = function ItemCellTemplate(list, viewContainer, protoViewRef) {
                _classCallCheck(this, ItemCellTemplate);

                console.log('Item cell template', list, viewContainer, protoViewRef);
                this.protoViewRef = protoViewRef;
                this.viewContainer = viewContainer;
                list.setItemTemplate(this);
            };

            _export("ItemCellTemplate", ItemCellTemplate);

            _export("ItemCellTemplate", ItemCellTemplate = __decorate([Directive({
                selector: 'template[cell]'
            }), __param(0, Host()), __metadata('design:paramtypes', [typeof (_a = typeof List !== 'undefined' && List) === 'function' && _a || Object, typeof (_b = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _b || Object, typeof (_c = typeof ProtoViewRef !== 'undefined' && ProtoViewRef) === 'function' && _c || Object])], ItemCellTemplate));
        }
    };
});