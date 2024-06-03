const ParentPageObject = require('./parentPageObject')

const emailId = '#email'
const passwordId = '#password'

class RegistrationFailurePageObject extends ParentPageObject {

    async enterEmail (input) 
    {
      await $(emailId).addValue(`${input}`)
    }

    async clickOnEmail () 
    {
      await this.clickOnElement($(emailId))
    }

    async enterPassword (input)
    {
      await $(passwordId).addValue(`${input}`)
    }

    async clickOnPassword () 
    {
      await this.clickOnElement($(passwordId))
    }

    async clickOnRegistration()
    {
        await this.clickOnElement($('//div[not(contains(@class, "invisible"))]/a//span[contains(., "Register")]'))
        await this.waitForElementToDisplay($(emailId))
    }

    async verifyError(input)
    {
        await this.isElementDisplayed($(`//*[@data-testid="input-alert" and contains(., "${input}")]`))
    }
}

module.exports = RegistrationFailurePageObject