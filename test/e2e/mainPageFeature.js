describe('My application', function() {
  beforeEach(function(){
    browser.get('http://localhost:8000');
  });

  it('has a site title', function(){
    expect(browser.getTitle()).toEqual('Make-At-Os');
  });

  it('displays project titles', function(){
    expect(element(by.id('projectTitle')).getText()).toEqual('Virgin Galactic Launch');
  });

  it('displays project descriptions', function(){
    expect(element(by.id('projectText')).getText()).toEqual('sometext');
  });

  it('displays project images', function(){
    expect(browser.isElementPresent(by.id('projectImage'))).toBe(true);
  });
});
