'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Curso extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45|min:2',
    }
  }
}

module.exports = Curso
