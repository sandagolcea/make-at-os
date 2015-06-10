describe('My application', function() {

  it('has a title', function() {
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('Basic application');
  });

});