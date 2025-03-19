
# Testing with Cypress

![Static Badge](https://img.shields.io/badge/License-MIT-green)

## Description

- **Motivation**: The motivation behind this project was to improve the reliability and efficiency of testing web applications by simulating real-world API responses in a controlled environment. This helps ensure that the UI behaves as expected under different scenarios, including when data is not yet available or is slow to load. By intercepting API calls with Cypress and mocking data, I could test whether the components correctly render and manage the loading states, such as the spinner, without depending on an actual API or network conditions.
- **Why build This Project**: I built this project to automate and simplify the testing process, especially when working with dynamic data from APIs. It ensures that components render correctly when data is fetched from the server and maintains good user experience by validating that loading states, such as spinners, display until the data is fully loaded. Mocking data during testing also reduces dependency on external services or databases, making tests faster and more stable.
- **What problem's did it solve**: 
    - **Flaky tests:** By mocking API data, I avoided issues caused by unreliable external APIs or network interruptions, making tests more stable and repeatable.
    - **Long test execution times:** By mocking the data, the tests could run faster since they didn't require actual server responses.
    - **UI validation:** It ensured that components properly handled loading states (like spinners) and displayed data when available.
    - **Improved test coverage:** This method allowed for testing edge cases, such as slow network responses, timeouts, or no data, that would be difficult to simulate with real APIs.
- **Lesson's Learned**: 
    - **Cypress capabilities:** I deepened my understanding of Cypress, especially regarding intercepting and mocking network requests using cy.intercept().
    - **Component testing:** I gained insights into testing React/Vue/Angular components more effectively, ensuring proper interaction between the UI and external data.
    - **Handling loading states:** I learned how to simulate different data loading scenarios and how the UI should respond to them.
    - **Mocking data best practices:** I discovered the importance of mocking data in automated tests to make them reliable and fast.
- **What makes your project stand-out**: 
    - **Combination of UI and API testing:** This project stands out because it integrates API mocking with UI component testing, focusing on the interaction between mocked data and how components handle loading states.
    - **Realistic mock setups:** The project uses realistic mock data, making the tests closer to real-world scenarios. It simulates various states (data fetching, no data, errors) to ensure the UI handles them gracefully.
    - **Reusable approach:** The techniques used in this project can be easily reused for any API-driven UI, making it a great tool for teams working with dynamic data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)
- [contributors](#contributors)

## Installation
1. Clone the Repo and Navigate to the directory
```
git clone https://github.com/gh0st0wls/FullGrownCyrpus
cd directory_name
```

2. Install Dependencies
```
npm install
```

3. Run Cypress
```
npx cypress open
```

## Usage
- **Testing components:** After setting up the project, you can write tests for your own React/Vue/Angular components by simulating API calls and verifying the UI's response to different states (loading, no data, etc.).
- **Mocking data:** Customize the mock data in the cy.intercept() command to test various scenarios for your components.
- **Running tests:** Run the Cypress test suite as part of your CI/CD pipeline to continuously test your application’s components as it evolves.

## Credits


## License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/mit/

## Features
- **Current Features:**
    - Intercepts API calls to simulate mock data.
    - Validates loading states (e.g., spinners) until the data is available.
    - End-to-end (E2E) tests for full-page/component functionality with mocked data.
- **Future add-ons:**
    - **More complex mock data scenarios:** Implement more advanced mock data manipulation, like handling paginated data or various API response times.
    - **Visual Regression Testing:** Integrate visual testing to compare snapshots of UI components and detect any unintentional UI changes.
    - **Error simulation:** Add the ability to simulate server errors (e.g., 500, 404) to test how the UI behaves during failures.
    - **Enhanced data assertions:** Build custom assertions for more comprehensive validation of API responses.

## How to Contribute
1. Fork the Repo.
2. Clone your fork locally.
3. Create a new Branch.
4. Make Your Changes.
5. Submit a pull request

## Tests
- This runs it in the terminal
```
npm run cypress run --component
```

- To run it in cypress gui (Can choose to run component test or E2E [Make sure Server is running prior to E2E test.])
```
npx cypress open --detached
```

## Questions
- For Further Questions and Bug reports Please reach out to me at Github [Dylan](https://github.com/gh0st0wls) or email me at dylanbender3@gmail.com

## Links
- [Video Demo](https://www.loom.com/share/65a422d56c66438aa91f84b7004bc5a3?sid=1c6fc853-a067-421e-a7c3-809f689a6501)
- [Github Repo](https://github.com/gh0st0wls/FullGrownCyrpus)

## contributors
- special thanks to Sidhu, Phil, Harriet, Aley.