'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turma extends ValidatorAbstract{
  get rules () {
    return {
      codturma: 'required|max:40',
      id_turno: 'required|integer',
      id_usuario: 'required|integer',
      id_disciplina: 'required|integer',
      id_horario: 'required|integer' 
    }
  }
}

module.exports = Turma
