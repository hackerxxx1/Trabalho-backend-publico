'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const x = use('App/Models/Turma')
class TurmaSeeder {
  async run () {
    await x.createMany([
      {id:1,codturma:'12345',turno_id:1,disciplina_id:7,usuario_id:2,horario_id:2},
      {id:2,codturma:'54321',turno_id:1,disciplina_id:6,usuario_id:2,horario_id:1},
      {id:3,codturma:'11111',turno_id:2,disciplina_id:5,usuario_id:2,horario_id:3},
      {id:4,codturma:'22222',turno_id:2,disciplina_id:7,usuario_id:2,horario_id:4},
      {id:5,codturma:'33333',turno_id:3,disciplina_id:1,usuario_id:1,horario_id:5},
      {id:6,codturma:'44444',turno_id:3,disciplina_id:2,usuario_id:1,horario_id:6},
    ])
  }
}

module.exports = TurmaSeeder
