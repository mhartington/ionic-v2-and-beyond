describe('modal/basic: android', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/modal/basic/index.html?ionicplatform=android');
});

'use strict';

it('should open action sheet', function () {
    element(by.css('.e2eOpenModal')).click();
});
it('should close with close button click', function () {
    element(by.css('.e2eCloseMenu')).click();
});

});
