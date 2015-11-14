describe('switch/basic: android', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/switch/basic/index.html?ionicplatform=android&ionicanimate=false&snapshot=true');
});

'use strict';

it('should check apple via switch element click', function () {
    element(by.css('[ng-control=appleCtrl] media-switch')).click();
});
it('should enable/check grape via buttons and submit form', function () {
    element(by.css('.e2eGrapeDisabled')).click();
    element(by.css('.e2eGrapeChecked')).click();
    element(by.css('.e2eSubmit')).click();
});

});
