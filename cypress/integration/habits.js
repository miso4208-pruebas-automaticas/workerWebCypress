describe('Habitica testing', function() {
    it('Visits habitica and add a Habit', function() {
      cy.visit('http://www.habitica.com/static/home')
      //cy.contains('Ingresar').click()
      cy.get('a[href="/login"]').click()
      cy.get('#login-form').find('input[id="usernameInput"]').click().type("fakeUser1@fake.com")
      cy.get('#login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('.btn-info').click()
      if(cy.get('textarea[placeholder="Add a Habit"]').should('exist')){
        cy.get('textarea[placeholder="Add a Habit"]').click().clear().type("Habito de pruebas{enter}")
        //cy.get('h3').find('p').getText()
        var tarea= cy.get('h3').find('p').contains("Habito de pruebas")
        tarea.invoke('text').then((text)=>{
            expect(text).equal('Habito de pruebas')
        })
      }
    })
    it('Visits habitica and edit a habit', function() {
      cy.visit('http://www.habitica.com/static/home')
      //cy.contains('Ingresar').click()
      cy.get('a[href="/login"]').click()
      cy.get('#login-form').find('input[id="usernameInput"]').click().type("fakeUser1@fake.com")
      cy.get('#login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('.btn-info').click()
      if(cy.get('h3').find('p').contains("Habito de pruebas").should('exist')){
        var tarea= cy.get('div').find('p').contains("Habito de pruebas")
        tarea.click()
        var mod=cy.get('input[class="form-control title-input"]')
        mod.click().clear({force:true}).type("Habito modificado{enter}")
        cy.get('#task-modal .task-modal-footer').find('button[class="btn btn-primary"]').click()
      }
    })
    it('Visits habitica and delete a habit', function() {
      cy.visit('http://www.habitica.com/static/home')
      cy.get('a[href="/login"]').click()
      cy.get('#login-form').find('input[id="usernameInput"]').click().type("fakeUser1@fake.com")
      cy.get('#login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('.btn-info').click()
      if(cy.get('h3').find('p').contains("Habito modificado").should('exist')){
        var tarea= cy.get('div').find('p').contains("Habito modificado")
        tarea.click()
        cy.get('div').find('span').contains('Delete this Task').click()
        expect(cy.get('h3').find('p').contains("Habito modificado").should('not.exist'))
      }
    })
})
