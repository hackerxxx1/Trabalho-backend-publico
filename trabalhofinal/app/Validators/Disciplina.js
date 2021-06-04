'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Disciplina extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:45|min:2',
      id_curso: 'integer|required'
    }
  }
}

module.exports = Disciplina
