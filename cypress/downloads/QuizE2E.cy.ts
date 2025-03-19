describe("Quiz", () => {
  beforeEach(() => {
    // Stub the API call to return mock questions
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      fixture:'questions.json'
    }).as('getQuestions');
    cy.visit('/');

  });
  it('visits the pagestarts the quiz and answers the questions',() => {
    cy.get("button").contains("Start Quiz").should("be.visible");
    cy.get("button").contains("Start Quiz").click();

    cy.wait('@getQuestions');
    
    cy.get("h2").contains("What is 2 + 2?").should('be.visible');
    cy.get("button").contains('2').should("be.visible").click(); // answer 4


    cy.get("h2").contains("What is 3 + 3?").should('be.visible');
    cy.get("button").contains('2').should('be.visible').click(); // answer 6

    cy.get("h2").contains('Quiz Completed').should("be.visible");
    cy.get('.alert-success').contains('Your score: 2/2').should('be.visible');

     // Ensure the "Take New Quiz" button is visible
     cy.get('button').contains('Take New Quiz').should('be.visible');
     cy.get('button').contains('Take New Quiz').click();
  });
  it('shows loading spinner when questions are being fetched', () => {
    // Stub API to simulate delay in fetching questions
    cy.intercept('GET', '/api/questions/random', {
      delayMs: 1000,
      statusCode: 200,
      body: [],
    }).as('getQuestions');

    // cy.visit('/');
    // Click the "Start Quiz" button
    cy.get('button').contains('Start Quiz').click();

    // The loading spinner should be visible while fetching data
    cy.get('.spinner-border').should('be.visible');

  })
})
  