Feature: enter data in vehicle form

  Scenario: enter vehicle data
    Given user is on the aba enter vehicle data
    When enter in the form valid values
    When click on next button
    Then the page title should be update
