System.register('ionic/native/plugins', ['./plugin', './battery/battery', './camera/camera', './contacts/contacts', './dialogs/dialogs', './device/device', './device-motion/device-motion', './device-orientation/device-orientation', './geolocation/geolocation', './vibration/vibration'], function (_export) {
  'use strict';

  return {
    setters: [function (_plugin) {
      for (var _key in _plugin) {
        if (_key !== 'default') _export(_key, _plugin[_key]);
      }
    }, function (_batteryBattery) {
      for (var _key2 in _batteryBattery) {
        if (_key2 !== 'default') _export(_key2, _batteryBattery[_key2]);
      }
    }, function (_cameraCamera) {
      for (var _key3 in _cameraCamera) {
        if (_key3 !== 'default') _export(_key3, _cameraCamera[_key3]);
      }
    }, function (_contactsContacts) {
      for (var _key4 in _contactsContacts) {
        if (_key4 !== 'default') _export(_key4, _contactsContacts[_key4]);
      }
    }, function (_dialogsDialogs) {
      for (var _key5 in _dialogsDialogs) {
        if (_key5 !== 'default') _export(_key5, _dialogsDialogs[_key5]);
      }
    }, function (_deviceDevice) {
      for (var _key6 in _deviceDevice) {
        if (_key6 !== 'default') _export(_key6, _deviceDevice[_key6]);
      }
    }, function (_deviceMotionDeviceMotion) {
      for (var _key7 in _deviceMotionDeviceMotion) {
        if (_key7 !== 'default') _export(_key7, _deviceMotionDeviceMotion[_key7]);
      }
    }, function (_deviceOrientationDeviceOrientation) {
      for (var _key8 in _deviceOrientationDeviceOrientation) {
        if (_key8 !== 'default') _export(_key8, _deviceOrientationDeviceOrientation[_key8]);
      }
    }, function (_geolocationGeolocation) {
      for (var _key9 in _geolocationGeolocation) {
        if (_key9 !== 'default') _export(_key9, _geolocationGeolocation[_key9]);
      }
    }, function (_vibrationVibration) {
      for (var _key10 in _vibrationVibration) {
        if (_key10 !== 'default') _export(_key10, _vibrationVibration[_key10]);
      }
    }],
    execute: function () {}
  };
});