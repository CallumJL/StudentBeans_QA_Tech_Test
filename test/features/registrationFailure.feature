Feature: Registration Failure

Scenario: As a user I want to attempt registration with an invalid email and password
  Given I am on the student beans homepage and can see Register Link
  When I click on Register link
  And I enter "test.com" in the email field
  Then I should see the "The email is invalid." error
  When I enter "abc" in the password field
  Then I should see the "Your password must be at least 8 characters" error

