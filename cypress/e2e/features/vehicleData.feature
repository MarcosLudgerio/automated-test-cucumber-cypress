Feature: Apply for vehicle insurance

  Scenario: insert valid values ​in the insurance data form
    Given user is on aba enter insurant data
    When enter in the form valid values in aba insurant
    When click on button next aba product
    Then the page title should be update to product
