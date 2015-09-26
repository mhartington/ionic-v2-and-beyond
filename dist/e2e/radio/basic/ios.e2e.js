describe('radio/basic: ios', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/radio/basic/index.html?ionicplatform=ios');
});

'use strict';

it('should check Cherry', function () {
    element(by.css('.e2eCherry')).click();
});

});
