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
      {id:1,codturma:'12345',id_turno:1,id_disciplina:7,id_usuario:2,id_horario:2},
      {id:2,codturma:'54321',id_turno:1,id_disciplina:6,id_usuario:2,id_horario:1},
      {id:3,codturma:'11111',id_turno:2,id_disciplina:5,id_usuario:2,id_horario:3},
      {id:4,codturma:'22222',id_turno:2,id_disciplina:7,id_usuario:2,id_horario:4},
      {id:5,codturma:'33333',id_turno:3,id_disciplina:1,id_usuario:1,id_horario:5},
      {id:6,codturma:'44444',id_turno:3,id_disciplina:2,id_usuario:1,id_horario:6},
    ])
  }
}

module.exports = TurmaSeeder
