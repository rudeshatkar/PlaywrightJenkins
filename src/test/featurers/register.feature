Feature: New user registration test

    Background: User Register Link
    Given User Navigates to register page

    Scenario: New user registration
    When User creates new user 
    Then User confirms registration successful