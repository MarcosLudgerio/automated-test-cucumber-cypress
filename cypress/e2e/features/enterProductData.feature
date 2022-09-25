Feature: enter product data

  Scenario: insert valid values in product data
    Given user is on aba enter product data
    When enter in the form valid values in aba product
    When click on button next aba select price
    Then the page title should be update to select price
