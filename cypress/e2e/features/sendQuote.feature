Feature: enter product data

  Scenario: send a quote with data values
    Given user is on aba send quote
    When filling the form with valid data
    When filling in the submission form with valid data
    Then the page message "send sucessful" shold be visible
