'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Reserva extends ValidatorAbstract {
  get rules () {
    return {
      turma_id: 'required|integer',
      sala_id: 'required|integer',
      horario_id: 'required|integer',
      usuario_id: 'required|integer'
    }
  }
}

module.exports = Reserva
