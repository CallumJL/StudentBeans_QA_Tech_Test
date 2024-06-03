const { Given, When, Then } = require('@cucumber/cucumber')
const RegistrationFailurePageObject = require('../pageObjects/registrationFailurePageObject')

const registrationFailurePageObject = new RegistrationFailurePageObject()


Given('I am on the student beans homepage and can see Register Link', async () => {
    await registrationFailurePageObject.goToHomePage()
    await registrationFailurePageObject.acceptCookies()
    await registrationFailurePageObject.verifyHomePage()
  })
  
  When('I click on Register link', async () => {
    await registrationFailurePageObject.clickOnRegistration()
  })
  
  When('I enter "test.com" in the email field', async () => {
    await registrationFailurePageObject.enterEmail("test.com")
    await registrationFailurePageObject.clickOnPassword()
  })
  
  Then('I should see the "The email is invalid." error', async () => {
    await registrationFailurePageObject.verifyError("The email is invalid.")
  })
  
  When('I enter "abc" in the password field', async () => {
    await registrationFailurePageObject.enterPassword("abc")
    await registrationFailurePageObject.clickOnEmail()
  })
  
  Then('I should see the "Your password must be at least 8 characters" error', async () => {
    await registrationFailurePageObject.verifyError("Your password must be at least 8 characters")
  })