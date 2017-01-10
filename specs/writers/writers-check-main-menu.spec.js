
describe('Writers main menu check test', function() {
  
  it('Should open writers  page', function() {
    browser.get('http://writer.vip-writers.commentality.com')
	browser.driver.manage().window().maximize();
  });



  it('should click on all main menu items', function() {

    //browser.wait(list.get(0).isPresent());//sometimes menu is not loading fast enough 

    el = element(by.css('[href="/payments"]'));
	expect(el.getText()).toEqual('Payments');
	el.click();
	browser.refresh();
	expect(browser.getCurrentUrl()).toContain("payments");

	expect(browser.getCurrentUrl()).toContain("tutorials");

	expect(browser.getCurrentUrl()).toContain("termsofuse");

	expect(browser.getCurrentUrl()).toContain("contacts");

	expect(browser.getCurrentUrl()).toContain("signUp/aboutMe");
  });
});
