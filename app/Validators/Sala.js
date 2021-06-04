'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Sala extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:45|min:2',
      tipo: 'required|max:20|min:4'
    }
  }
}

module.exports = Sala
