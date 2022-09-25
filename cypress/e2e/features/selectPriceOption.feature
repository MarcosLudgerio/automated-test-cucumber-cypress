Feature: enter product data

  Scenario Outline: select a price option
    Given user is on aba select a price option
    When select a option "<option>"
    When click on button send quote
    Then the page message "send sucessful" shold be visible

    Examples: 
      | option |
      | Gold   |
