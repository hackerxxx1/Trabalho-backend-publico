'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Disciplina extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:45|min:2',
      curso_id: 'integer|required'
    }
  }
}

module.exports = Disciplina
