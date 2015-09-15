Feature: Opening times

    # As a user
    # When I visit a category
    # I want to see the opening times of results
    # So that I can choose a service

    Background:
        Given my location is "Melbourne VIC"
        And my gender is female
        And I am not part of any relevant demographics

    Scenario: Can show opening time tomorrow
        Given today is a Tuesday
        # Navigating will undo the mocked time
        When I click on "Food"
        Then I should see the results
        ------------------------------
        Opening hours (OpeningTimes)
        ==============================
        Closed until tomorrow 9:00 AM
        ------------------------------

    Scenario: Can show opening time 2 days hence
        Given today is a Monday
        # Navigating will undo the mocked time
        When I click on "Food"
        Then I should see the results
        ------------------------------
        Opening hours (OpeningTimes)
        ==============================
        Closed until Wednesday 9:00 AM
        ------------------------------

    Scenario: Can show opening time next week
        Given today is a Wednesday
        # Navigating will undo the mocked time
        When I click on "Food"
        Then I should see the results
        -------------------------------------
        Opening hours (OpeningTimes)
        =====================================
        Closed until next Wednesday 9:00 AM
        -------------------------------------
