'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Usuario extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45|min:2',
      codprof: 'required|max:45|min:3'
    }
  }
}

module.exports = Usuario
