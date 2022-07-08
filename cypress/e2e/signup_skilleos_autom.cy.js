describe('Use case QA Skilleos', () => {
  it('Inscription sur le site de Skilleos', () => {
      cy.visit('https://moncompte.skilleos.com/authentification#blocconnexion') // accès au formulaire d'inscription

      cy.get('#tabs-swipe-demo').first().click() // click sur l'onglet inscription

      cy.get('#user_registration_firstname').type('Prenom-test') // saisie du prénom, puis des autres informations

      cy.get('#user_registration_lastname').type('Nom-test')

      cy.get('#user_registration_email').type('skiusecas09072022@yopmail.com') // remplacer par la date du jour pour avoir une adresse unique

      cy.get('#user_registration_plainPassword_first').type('TestUser?7')

      cy.get('#user_registration_plainPassword_second').type('TestUser?7')

      cy.get('#user_registration_condition').check({ force: true }) // cocher les CGU

      cy.get('input').contains('S\'INSCRIRE PAR EMAIL').click() // click sur le bouton de submit

      cy.url().should('eq', 'https://www.skilleos.com/#blocconnexion') // Je vérifie l'URL de la page qui vient après l'inscription

      cy.contains('Mon abonnement') // je vérifie aussi 
      //que la page contient bien le bouton Mon abonnement présent dans le dropwodn de l'utilisateur après inscription
  })
})