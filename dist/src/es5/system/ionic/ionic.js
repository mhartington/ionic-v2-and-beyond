System.register('ionic/ionic', ['./config/config', './config/modes', './config/decorators', './net/http', './components', './platform/platform', './platform/registry', './platform/plugins', './platform/storage', './util/click-block', './util/focus', './util/events', './animations/animation', './animations/builtins', './transitions/transition', './transitions/ios-transition', './transitions/md-transition'], function (_export) {
  'use strict';

  return {
    setters: [function (_configConfig) {
      for (var _key in _configConfig) {
        if (_key !== 'default') _export(_key, _configConfig[_key]);
      }
    }, function (_configModes) {
      for (var _key2 in _configModes) {
        if (_key2 !== 'default') _export(_key2, _configModes[_key2]);
      }
    }, function (_configDecorators) {
      for (var _key3 in _configDecorators) {
        if (_key3 !== 'default') _export(_key3, _configDecorators[_key3]);
      }
    }, function (_netHttp) {
      for (var _key4 in _netHttp) {
        if (_key4 !== 'default') _export(_key4, _netHttp[_key4]);
      }
    }, function (_components) {
      for (var _key5 in _components) {
        if (_key5 !== 'default') _export(_key5, _components[_key5]);
      }
    }, function (_platformPlatform) {
      for (var _key6 in _platformPlatform) {
        if (_key6 !== 'default') _export(_key6, _platformPlatform[_key6]);
      }
    }, function (_platformRegistry) {
      for (var _key7 in _platformRegistry) {
        if (_key7 !== 'default') _export(_key7, _platformRegistry[_key7]);
      }
    }, function (_platformPlugins) {
      for (var _key8 in _platformPlugins) {
        if (_key8 !== 'default') _export(_key8, _platformPlugins[_key8]);
      }

      for (var _key18 in _platformPlugins) {
        if (_key18 !== 'default') _export(_key18, _platformPlugins[_key18]);
      }
    }, function (_platformStorage) {
      for (var _key9 in _platformStorage) {
        if (_key9 !== 'default') _export(_key9, _platformStorage[_key9]);
      }
    }, function (_utilClickBlock) {
      for (var _key10 in _utilClickBlock) {
        if (_key10 !== 'default') _export(_key10, _utilClickBlock[_key10]);
      }
    }, function (_utilFocus) {
      for (var _key11 in _utilFocus) {
        if (_key11 !== 'default') _export(_key11, _utilFocus[_key11]);
      }
    }, function (_utilEvents) {
      for (var _key12 in _utilEvents) {
        if (_key12 !== 'default') _export(_key12, _utilEvents[_key12]);
      }
    }, function (_animationsAnimation) {
      for (var _key13 in _animationsAnimation) {
        if (_key13 !== 'default') _export(_key13, _animationsAnimation[_key13]);
      }
    }, function (_animationsBuiltins) {
      for (var _key14 in _animationsBuiltins) {
        if (_key14 !== 'default') _export(_key14, _animationsBuiltins[_key14]);
      }
    }, function (_transitionsTransition) {
      for (var _key15 in _transitionsTransition) {
        if (_key15 !== 'default') _export(_key15, _transitionsTransition[_key15]);
      }
    }, function (_transitionsIosTransition) {
      for (var _key16 in _transitionsIosTransition) {
        if (_key16 !== 'default') _export(_key16, _transitionsIosTransition[_key16]);
      }
    }, function (_transitionsMdTransition) {
      for (var _key17 in _transitionsMdTransition) {
        if (_key17 !== 'default') _export(_key17, _transitionsMdTransition[_key17]);
      }
    }],
    execute: function () {}
  };
});