const ParentPageObject = require('./parentPageObject')

const trendingNowLink = $('//a[@data-testid="nav-category-trending-now"]')
const trendingOfferLink = $('//div[@data-testid="grids-container"]//article[6]/a')

class TrendingOffersPageObject extends ParentPageObject {
    async getTrendingOfferUrl () {
        let trendingNowUrl = await this.getElementAttribute(trendingOfferLink, "href")
        return trendingNowUrl
      }

      async getTrendingNowUrl () {
        let trendingNowUrl = await this.getElementAttribute(trendingNowLink, "href")
        return trendingNowUrl
      }

      async selectTrendingNow () {
        await this.clickOnElement(trendingNowLink)
      }

      async selectTrendingOffer () {
        await this.clickOnElement(trendingOfferLink)
      }
}

module.exports = TrendingOffersPageObject
