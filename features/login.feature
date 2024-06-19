@allTest
Feature: Login Functionality
    @TC001_Login
    Scenario Outline: Successful Login with Valid Credentials
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should be redirected to the homepage

        Examples:
            | emailID        | password    |
            | test@gamil.com | password123 |

    @TC002_InvalidEmail
    Scenario Outline: Unsuccessful Login with Invalid Email
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should see an error message "Invalid email address"

        Examples:
            | emailID        | password    |
            | test@gmail.com | password123 |

    @TC003_InvalidPassword
    Scenario Outline: Unsuccessful Login with Invalid Password
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should see an error message "Incorrect password"

        Examples:
            | emailID        | password  |
            | test@gmail.com | Incorrect |
    @TC004_EmptyEmail
    Scenario Outline: Unsuccessful Login with Empty Email
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should see an error message "Email is required"

        Examples:
            | emailID | password    |
            |         | password123 |
    @TC005_EmptyPassword
    Scenario Outline: Unsuccessful Login with Empty Password
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should see an error message "Password is required"

        Examples:
            | emailID        | password |
            | test@gmail.com |          |

    @TC006_EmptyEmailPassword
    Scenario Outline: Unsuccessful Login with Both Fields Empty
        Given The user is on the login page
        When The user enters a valid email "<emailID>" in the "User" field
        And The user enters a valid password "<password>" in the "Password" field
        And The user clicks the "LOGIN" button
        Then The user should see an error message "Email and Password are required"

        Examples:
            | emailID | password |
            |         |          |
