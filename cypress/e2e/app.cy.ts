describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/de");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="login"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/login");

    // The new page should contain an h1 with "About page"
    cy.get("h3").contains("Einloggen");
  });
});
