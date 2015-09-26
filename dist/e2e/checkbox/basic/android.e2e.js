describe('checkbox/basic: android', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/checkbox/basic/index.html?ionicplatform=android');
});

'use strict';

it('should check apple, enable/check grape, submit form', function () {
    element(by.css('.e2eAppleCheckbox')).click();
    element(by.css('.e2eGrapeDisabled')).click();
    element(by.css('.e2eGrapeChecked')).click();
    element(by.css('.e2eSubmit')).click();
});

});
