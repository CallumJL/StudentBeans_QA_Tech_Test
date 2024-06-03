const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async clickOnSearch () {
    await this.clickOnElement($('//button[contains(@data-testid, "nav-search-desktop")]'))
    await this.isElementDisplayed($('//input[contains(@data-testid, "search-input")]'))
  }

  async enterSearchValues (input) {
    await $('//input[contains(@data-testid, "search-input")]').addValue(`${input}`)
  }

  async waitForResults(index, value) {
    await $(`//div[@role="presentation"][${index}]/a[contains(@data-testid, "search-result-offer")]/div/p[1][contains(., '${value}')]`).waitForExist({ timeout: 5000 });
  }

  async getSearchResultText(index) {
    let searchResult = await $(`//div[@role="presentation"][${index}]/a[contains(@data-testid, "search-result-offer")]/div/p[2]`).getText();
    return searchResult
  }

  async clickOnResult(index) {
    await this.clickOnElement($(`//div[@role="presentation"][${index}]/a[contains(@data-testid, "search-result-offer")]`))
  }

  async verifyOffer(text) {
    await this.isElementDisplayed($(`//article[@data-offer-selected="true" and contains(., "${text}")]`))
  }
}

module.exports = SimpleSearchPageObject
