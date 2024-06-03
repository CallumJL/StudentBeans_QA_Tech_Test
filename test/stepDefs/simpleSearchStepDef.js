const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.acceptCookies()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.clickOnSearch()
})

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.enterSearchValues("Samsung")
  await simpleSearchPageObject.waitForResults(4, "Samsung")
})

Then('I should select the 4th "Samsung" search listing', async () => {
  let offerText = await simpleSearchPageObject.getSearchResultText(4)
  await simpleSearchPageObject.clickOnResult(4)
  await simpleSearchPageObject.verifyOffer(`${offerText}`)
})
