describe('radio/basic: android', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/radio/basic/index.html?ionicplatform=android&ionicanimate=false&snapshot=true');
});

'use strict';

it('should check Cherry', function () {
    element(by.css('.e2eCherry')).click();
});

});
