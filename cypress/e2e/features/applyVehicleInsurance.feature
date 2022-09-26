Feature: Apply for vehicle insurance

  Scenario: insert valid values in vehicle data form
    Given user is on the aba enter vehicle data
    When enter in the form valid values in aba vehicle
    When click on button next insurant
    Then the page title should be update to insurant

  Scenario: insert valid values ​in the insurance data form
    Given user is on aba enter insurant data
    When enter in the form valid values in aba insurant
    When click on button next aba product
    Then the page title should be update to product

  Scenario: insert valid values in product data
    Given user is on aba enter product data
    When enter in the form valid values in aba product
    When click on button next aba select price
    Then the page title should be update to select price

  Scenario Outline: select a price option
    Given user is on aba select a price option
    When select a option "<option>"
    When click on button next send quote
    Then the page title should be update to send quote

    Examples: 
      | option |
      | Gold   |

  Scenario Outline: send a quote with data values
    Given user is on aba send quote
    When filling in the submission form with valid data
    When click on button next send email
    Then the page message "<message>" shold be visible

    Examples: 
      | message                 |
      | Sending e-mail success! |
