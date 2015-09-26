describe('menu/basic: ios', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/menu/basic/index.html?ionicplatform=ios');
});

'use strict';

it('should toggle open menu', function () {
    element(by.css('.e2eContentToggleMenu')).click();
});
it('should close menu', function () {
    element(by.css('.e2eCloseMenu')).click();
});

});
