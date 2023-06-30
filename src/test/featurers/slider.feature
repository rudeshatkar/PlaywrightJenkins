Feature: Slider stest
    Background: 
        Given User navigates to the application
        And User click on login link

    Scenario Outline: Add to cart
        And User enter the username as "<username>"
        And User enter the password as "<password>"
        And User click on Login button
        Then Login should be success
        When User set the slider range to "<range>"
        Then The range should be applied

        Examples:
            | username | password | range   |
            | ortonikc | pass1234 | 211     |
            