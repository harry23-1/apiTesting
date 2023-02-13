describe('Articles Endpoints', () => {
    it('should get all articles', () => {
      cy.request('GET', '/').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('articles')
      })
    })
  
    it('should get feed', () => {
      cy.request({
        method: 'GET',
        url: '/feed',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('articles')
      })
    })
  
    it('should create an article', () => {
      cy.request({
        method: 'POST',
        url: '/',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: {
          title: 'Test Title',
          description: 'Test description',
          body: 'Test body'
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('article')
      })
    })
  
    it('should get a single article by slug', () => {
      cy.request('GET', '/test-title').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('article')
      })
    })
  
    it('should update an article', () => {
      cy.request({
        method: 'PATCH',
        url: '/test-title',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: {
          title: 'Updated Test Title',
          description: 'Updated Test description',
          body: 'Updated Test body'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('article')
      })
    })
  
    it('should delete an article', () => {
      cy.request({
        method: 'DELETE',
        url: '/updated-test-title',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(204)
      })
    })
  })
  