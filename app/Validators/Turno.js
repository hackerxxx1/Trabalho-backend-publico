'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turno extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:40|min:2',
      usuario_id: 'required|integer',
      curso_id: 'required|integer'
    }
  }
}

module.exports = Turno
