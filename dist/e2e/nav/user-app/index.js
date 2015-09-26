System.register("index", ["angular2/angular2"], function (_export) {
    "use strict";

    var Directive, Component, View, bootstrap, Injectable, DynamicComponentLoader, ElementRef, __decorate, __metadata, IonicModal, UserService, IonicButton, UserButton, IONIC_DIRECTIVES, UserModal, UserRootComponent, OverlayAnchor, _a, _b;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function ionicApp(userApp) {
        function IonicRootComponent() {}
        IonicRootComponent.annotations = [new Component({
            selector: 'ion-app',
            viewInjector: [IonicModal]
        }), new View({
            template: "\n        <user-app>\n          <overlay-anchor></overlay-anchor>\n        </user-app>",
            directives: [userApp, OverlayAnchor]
        })];
        return IonicRootComponent;
    }
    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            bootstrap = _angular2Angular2.bootstrap;
            Injectable = _angular2Angular2.Injectable;
            DynamicComponentLoader = _angular2Angular2.DynamicComponentLoader;
            ElementRef = _angular2Angular2.ElementRef;
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

            IonicModal = (function () {
                function IonicModal() {
                    _classCallCheck(this, IonicModal);

                    console.log('IonicModal constructor');
                }

                _createClass(IonicModal, [{
                    key: "open",
                    value: function open(componentType) {
                        console.log('IonicModal open:', componentType.name);
                    }
                }]);

                return IonicModal;
            })();

            IonicModal = __decorate([Injectable(), __metadata('design:paramtypes', [])], IonicModal);

            UserService = function UserService() {
                _classCallCheck(this, UserService);

                console.log('UserService constructor');
                this.id = Math.random();
            };

            UserService = __decorate([Injectable(), __metadata('design:paramtypes', [])], UserService);

            IonicButton = function IonicButton() {
                _classCallCheck(this, IonicButton);

                console.log('IonicButton');
            };

            IonicButton = __decorate([Directive({
                selector: 'button',
                host: {
                    'ionic-button': 'true'
                }
            }), __metadata('design:paramtypes', [])], IonicButton);

            UserButton = function UserButton() {
                _classCallCheck(this, UserButton);

                console.log('UserButton');
            };

            UserButton = __decorate([Directive({
                selector: 'button',
                host: {
                    'user-button': 'true'
                }
            }), __metadata('design:paramtypes', [])], UserButton);
            IONIC_DIRECTIVES = [IonicButton];

            UserModal = function UserModal(userService) {
                _classCallCheck(this, UserModal);

                console.log('UserModal constructor');
                this.userService = userService;
            };

            UserModal = __decorate([Component({
                selector: 'user-modal'
            }), View({
                template: "\n    <div style=\"position:absolute;top:0;right:0;bottom:0;left:0;background:#ddd;\">\n      <h2>user modal</h2>\n      <p>UserService: {{userService.id}}\n    </div>\n  "
            }), __metadata('design:paramtypes', [UserService])], UserModal);

            UserRootComponent = (function () {
                function UserRootComponent(ionicModal, userService) {
                    _classCallCheck(this, UserRootComponent);

                    console.log('UserRootComponent constructor');
                    this.ionicModal = ionicModal;
                }

                _createClass(UserRootComponent, [{
                    key: "openModal",
                    value: function openModal() {
                        this.ionicModal.open(UserModal);
                    }
                }]);

                return UserRootComponent;
            })();

            UserRootComponent = __decorate([Component({
                selector: 'user-app',
                hostInjector: [UserService]
            }), View({
                template: "\n    <h1>user root component</h1>\n    <button (click)=\"openModal()\">Open Modal</button>\n    <ng-content></ng-content>\n  ",
                directives: IONIC_DIRECTIVES.concat([UserButton])
            }), __metadata('design:paramtypes', [IonicModal, UserService])], UserRootComponent);

            OverlayAnchor = function OverlayAnchor(userService, elementRef, loader) {
                _classCallCheck(this, OverlayAnchor);

                this.elementRef = elementRef;
                console.log('OverlayAnchor constructor', userService);
                loader.loadNextToLocation(UserModal, elementRef).then(function (ref) {});
            };

            OverlayAnchor = __decorate([Directive({
                selector: 'overlay-anchor'
            }), __metadata('design:paramtypes', [UserService, typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof DynamicComponentLoader !== 'undefined' && DynamicComponentLoader) === 'function' && _b || Object])], OverlayAnchor);console.log('bootstrap');
            bootstrap(ionicApp(UserRootComponent))["catch"](function (err) {
                console.error('bootstrap', err);
            });
        }
    };
});