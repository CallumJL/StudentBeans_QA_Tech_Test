const ParentPageObject = require('./parentPageObject')

class RegistrationFailurePageObject extends ParentPageObject {

    async enterEmail (input) 
    {
      await $('#email').addValue(`${input}`)
    }

    async clickOnEmail () 
    {
      await this.clickOnElement($('#email'))
    }

    async enterPassword (input)
    {
      await $('#password').addValue(`${input}`)
    }

    async clickOnPassword () 
    {
      await this.clickOnElement($('#password'))
    }

    async clickOnRegistration()
    {
        await this.clickOnElement($('//div[not(contains(@class, "invisible"))]/a//span[contains(., "Register")]'))
        await this.waitForElementToDisplay($('#email'))
    }

    async verifyError(input)
    {
        await this.isElementDisplayed($(`//*[@data-testid="input-alert" and contains(., "${input}")]`))
    }
}

module.exports = RegistrationFailurePageObject