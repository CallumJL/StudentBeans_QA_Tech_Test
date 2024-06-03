const { assert, expect } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }

  async verifyPageLoad (url) {
    let currentUrl = browser.getUrl()
    assert(await expect(await currentUrl, 'The page has not loaded').to.contain(`${url}`))
  }

  async acceptCookies () {
    const acceptCookieBtn = '#onetrust-accept-btn-handler'
    await this.isElementDisplayed($(acceptCookieBtn))
    await this.clickOnElement($(acceptCookieBtn))
    await this.isElementNotDisplayed($(acceptCookieBtn))
  }

  async waitForElementToDisplay(element)
  {
    await element.waitForDisplayed({ timeout: 3000 })
  }

  async isElementDisplayed (element) {
    await this.waitForElementToDisplay(element)
    assert(expect(await element.isDisplayed(), 'Element not visible, expected true').to.equal(true))
  }

  async isElementNotDisplayed (element) {
    await element.waitForDisplayed({ reverse: true })
    assert(expect(await element.isDisplayed(), 'Element is visible, expected false').to.equal(false))
  }

  async clickOnElement (element) {
    await element.click()
  }

  async getElementAttribute (element, attribute) {
    return await element.getAttribute(`${attribute}`)
  }
}

module.exports = ParentPageObject
