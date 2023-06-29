Feature: Add remove wishlist test
    Background:
        Given User navigates to the application
        And User click on login link

    Scenario Outline: Add to cart
        And User enter the username as "<username>"
        And User enter the password as "<password>"
        And User click on Login button
        Then Login should be success
        When User search for a "<book>"
        And User add the book to the wishlist
        Then The wishlist badge should get updated
        Then User remove the book from the wishlist

        Examples:
            | username | password | book            |
            | ortonikc | pass1234 | The Simple Wild |
            | ortoni   | Pass1234 | Roomies         |