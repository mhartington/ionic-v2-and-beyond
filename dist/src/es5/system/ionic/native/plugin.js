System.register('ionic/native/plugin', [], function (_export) {
    'use strict';

    var NativePluginDecorator;

    _export('NativePlugin', NativePlugin);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function NativePlugin(config) {
        return function (cls) {
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new NativePluginDecorator(cls, config));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    return {
        setters: [],
        execute: function () {
            NativePluginDecorator = function NativePluginDecorator(cls, config) {
                var _this = this;

                _classCallCheck(this, NativePluginDecorator);

                this.cls = cls;
                this.config = config;
                cls.ifPlugin = function (check, cb) {
                    var returnType = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    // Convert to boolean the plugin param
                    var exists = !!check;
                    if (typeof check === 'function') {
                        exists = check();
                    }
                    if (exists) {
                        return cb();
                    }
                    cls.pluginWarn();
                    return typeof returnType === 'function' ? returnType() : returnType;
                };
                cls.pluginWarn = function () {
                    if (cls._pluginWarned) {
                        // Only warn once
                        return;
                    }
                    var platformString = [];
                    for (var k in _this.config.platforms) {
                        platformString.push('\t' + k + ': ' + _this.config.platforms[k]);
                    }
                    console.warn('Plugin for ' + _this.config.name + ' not installed. For native functionality, please install the correct plugin for your platform:\n' + platformString.join('\n'));
                    // Set a flag so we don't warn again
                    cls._pluginWarned = true;
                };
            };

            _export('NativePluginDecorator', NativePluginDecorator);
        }
    };
});