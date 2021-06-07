'use strict'

/*
|--------------------------------------------------------------------------
| ReservaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const reserva = use('App/Models/Reserva')
class ReservaSeeder {
  async run () {
    await reserva.createMany([
      {id:1,turma_id:1,sala_id:6,horario_id:2,usuario_id:2},
      {id:2,turma_id:2,sala_id:5,horario_id:1,usuario_id:2},
      {id:3,turma_id:3,sala_id:6,horario_id:3,usuario_id:2},
      {id:4,turma_id:4,sala_id:5,horario_id:4,usuario_id:2}
    ])
  }
}

module.exports = ReservaSeeder
