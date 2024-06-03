const { Given, When, Then } = require('@cucumber/cucumber')
const TrendingOffersPageObject = require('../pageObjects/trendingOffersPageObject')

const trendingOffersPageObject = new TrendingOffersPageObject()

Given('I am on the student beans homepage to view trending offers', async () => {
  await trendingOffersPageObject.goToHomePage()
  await trendingOffersPageObject.acceptCookies()
  await trendingOffersPageObject.verifyHomePage()
})

When('I click on Trending Now', async () => {
  let trendingNowUrl = await trendingOffersPageObject.getTrendingNowUrl()
  await trendingOffersPageObject.selectTrendingNow()
  await trendingOffersPageObject.verifyPageLoad(trendingNowUrl)
})

Then('I should select the 6th listed discount', async () => {
  let trendingOfferLink = await trendingOffersPageObject.getTrendingOfferUrl()
  await trendingOffersPageObject.selectTrendingOffer()
  await trendingOffersPageObject.verifyPageLoad(trendingOfferLink)
})
