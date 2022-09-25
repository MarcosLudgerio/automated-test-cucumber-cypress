Feature: enter vehicle data

  Scenario: insert valid values in vehicle data form
    Given user is on the aba enter vehicle data
    When enter in the form valid values
    When click on next button
    Then the page title should be update
