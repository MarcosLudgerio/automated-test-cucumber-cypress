Feature: enter insurant data

  Scenario: enter valid values ​​in the insurance data form
    Given user is on aba enter insurant data
    When enter in the form valid values
    When click on next button
    Then the page title should be update
