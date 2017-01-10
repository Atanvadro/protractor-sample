var Login = function(){

    browser.get('http://writer.vip-writers.commentality.com/login');
	browser.driver.manage().window().maximize();

	element(by.model("credentials.email")).sendKeys("***");	
	element(by.model("credentials.password")).sendKeys("***");  

	element(by.css('[class="login__button"]')).click();
}

module.exports.Login = Login;