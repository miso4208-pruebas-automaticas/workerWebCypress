describe('Habitica testing', function() {
   /*it('Visits habitica and register', function() {
      cy.visit('http://wwww.habitica.com/static/home', {
        onBeforeLoad: (contentWindow) => {
            Object.defineProperty(navigator, 'language', { value: 'es_ES' })
        }
      })
      //cy.contains('Iniciar sesión').click()
      cy.get('a[href="/login"]').click()
      cy.get('#login-form').find('a[href="/register"]').click()
      cy.get('#login-form').find('input[id="usernameInput"]').click().type("fakeUser2")
      cy.get('#login-form').find('input[id="emailInput"]').click().type("fakeUser2@fake.com")
      cy.get('#login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('#login-form').find('input[id="confirmPasswordInput"]').click().type("pruebas201902")
      //cy.contains('Únete a Habitica').click()
      cy.get('.btn-info').click()
      cy.get('.modal-content').should('exist')
    })*/
    it('Visits habitica and login', function() {
      cy.visit('http://wwww.habitica.com/static/home', {
        onBeforeLoad: (contentWindow) => {
            Object.defineProperty(navigator, 'language', { value: 'es_ES' })
        }
      })
      //cy.contains('Ingresar').click()
      cy.get('a[href="/login"]').click()
      cy.get('#login-form').find('input[id="usernameInput"]').click().type("fakeUser1@fake.com")
      cy.get('#login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('.btn-info').click()

      /*if(cy.get('button[type="submit"]').should('exist')){
        cy.get('button[type="submit"]').click()
        cy.get('.next').click()
        cy.get('.footer .next').click()
        cy.get('.introjs-button').click()
      }*/
      cy.get('div[aria-label="User"]').should('exist')
      //cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})
