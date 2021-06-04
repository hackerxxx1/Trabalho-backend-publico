'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Reserva extends ValidatorAbstract {
  get rules () {
    return {
      id_turma: 'required|integer',
      id_sala: 'required|integer',
      id_horario: 'required|integer',
      id_usuario: 'required|integer'
    }
  }
}

module.exports = Reserva
