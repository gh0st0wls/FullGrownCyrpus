// import React from 'react'
// import questions from '../fixtures/questions.json'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  beforeEach(() => {
    // Stub the API call to return mock questions
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('getQuestions');
  });
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)

    // checking if start quiz button is visible
    cy.get('button').contains('Start Quiz').should('be.visible');

    // click start quiz
    cy.get('button').contains('Start Quiz').click();

    // waiting for questions to load
    cy.wait('@getQuestions');

    // check if questions are visible
    cy.get('h2').contains('What is 2 + 2?').should('be.visible');  
  
    // Click the correct answer (4)
    cy.get('button').contains('2').click(); // Selecting answer "4"
    
    // Ensure the second question appears
    cy.get('h2').contains('What is 3 + 3?').should('be.visible');

    // Click the correct answer (6)
    cy.get('button').contains('2').click(); // Selecting answer "6"

    // After completing the quiz, the "Quiz Completed" screen should appear
    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('.alert-success').contains('Your score: 2/2').should('be.visible');
    
    // Ensure the "Take New Quiz" button is visible
    cy.get('button').contains('Take New Quiz').should('be.visible');
  });

  it('shows loading spinner when questions are being fetched', () => {
    // Stub API to simulate delay in fetching questions
    cy.intercept('GET', '/api/questions/random', {
      delayMs: 1000,
      statusCode: 200,
      body: [],
    }).as('getQuestions');

    // Mount the component
    cy.mount(<Quiz />);

    // Click the "Start Quiz" button
    cy.get('button').contains('Start Quiz').click();

    // The loading spinner should be visible while fetching data
    cy.get('.spinner-border').should('be.visible');

    // After the questions are loaded, the spinner should disappear
    cy.wait('@getQuestions',{timeout: 1500});
    // cy.get('.spinner-border').should('not.exist');

    // cy.get('h2').contains('What is 2 + 2?').should('be.visible');
  })
})