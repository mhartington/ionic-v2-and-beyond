describe('action-menu/basic: ios', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/action-menu/basic/index.html?ionicplatform=ios');
});

'use strict';

it('should open action menu', function () {
    element(by.css('button')).click();
});
it('should close with backdrop click', function () {
    element(by.css('backdrop')).click();
});

});
