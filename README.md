Overview
This project contains a set of tests implemented using Playwright and JavaScript. The tests are written in a Behavior-Driven Development (BDD) format using Cucumber. The main focus of these tests is to verify the login functionality of the application.

Features

Playwright: For browser automation and end-to-end testing.
Cucumber: For defining test cases in a BDD format.
Positive and Negative Scenarios: Comprehensive coverage with 6 test cases to check various aspects of the login functionality.
Test Reports: Generated Cucumber reports to review test results.
Getting Started

Prerequisites

Node.js installed on your machine.
A package manager such as npm or yarn.
Installation

Clone the repository:

git clone <repository-url>
Install dependencies:
npm install
npx playwright install

Running the Tests
npm test

Note: Due to application stability issues, some assertions after navigating to the home screen have been commented out. The properties for these assertions are currently unavailable.

Viewing Test Reports
After running the tests, you can view the test reports by opening the cucumber-report.html file located in the report folder.

Test Scenarios
The tests include both positive and negative scenarios for the login functionality:

Valid login credentials: Test login with a valid username and password.
Invalid login credentials: Test login with an invalid username and/or password.
Empty username: Test login with an empty username.
Empty password: Test login with an empty password.
Special characters in username: Test login with special characters in the username.
Special characters in password: Test login with special characters in the password.