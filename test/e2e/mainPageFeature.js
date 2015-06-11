describe('My application', function() {

  beforeEach(function(){
    browser.get('http://localhost:8000');
  });

  it('has a site title', function() {
    expect(browser.getTitle()).toEqual('Make-At-Os');
  });

  it('displays project titles', function(){
    expect(element(by.id('projectTitle')).getText()).toEqual('Virgin Galactic Launch');
  });

});
