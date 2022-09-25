Feature: enter insurant data

  Scenario: insert valid values ​​in the insurance data form
    Given user is on aba enter insurant data
    When enter in the form valid values in aba insurant
    When click on button next aba product
    Then the page title should be update to product

  Scenario: insert valid values in vehicle data form
    Given user is on the aba enter vehicle data
    When enter in the form valid values in aba vehicle
    When click on button next insurant
    Then the page title should be update to insurant
