Feature: User Authentication Tests

    Background:
        Given User navigates to the application
        And User click on login link

    Scenario: Login should be success
        And User enter the username as "ortoni"
        And User enter the password as "Pass1234"
        When User click on Login button
        Then Login should be success
        
    Scenario: Login should not be success
        And User enter the username as '"RUde"'
        And User enter the password as "Pass12345678"
        When User click on Login button
        Then Login should fail