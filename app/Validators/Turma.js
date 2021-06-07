'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turma extends ValidatorAbstract{
  get rules () {
    return {
      codturma: 'required|max:40',
      turno_id: 'required|integer',
      usuario_id: 'required|integer',
      disciplina_id: 'required|integer',
      horario_id: 'required|integer' 
    }
  }
}

module.exports = Turma
