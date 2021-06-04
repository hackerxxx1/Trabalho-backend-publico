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
      {id:1,id_turma:1,id_sala:6,id_horario:2,id_usuario:2},
      {id:2,id_turma:2,id_sala:5,id_horario:1,id_usuario:2},
      {id:3,id_turma:3,id_sala:6,id_horario:3,id_usuario:2},
      {id:4,id_turma:4,id_sala:5,id_horario:4,id_usuario:2}
    ])
  }
}

module.exports = ReservaSeeder
