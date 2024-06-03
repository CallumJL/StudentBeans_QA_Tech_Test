Feature: Trending Offers

Scenario: As a user I want to view trending offers on studentbeans.com and select an offer
  Given I am on the student beans homepage to view trending offers
  When I click on Trending Now
  Then I should select the 6th listed discount

