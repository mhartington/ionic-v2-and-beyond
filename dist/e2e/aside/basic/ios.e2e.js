describe('aside/basic: ios', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/aside/basic/index.html?ionicplatform=ios');
});

'use strict';

it('should toggle open aside', function () {
    element(by.css('#e2eContentToggleAside')).click();
});
it('should close aside', function () {
    element(by.css('#e2eCloseMenu')).click();
});

});
