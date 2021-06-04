'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turno extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:40|min:2',
      id_usuario: 'required|integer',
      id_curso: 'required|integer'
    }
  }
}

module.exports = Turno
