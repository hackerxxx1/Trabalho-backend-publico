'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const disciplina = use('App/Models/Disciplina')
class DisciplinaSeeder {
  async run () {
    await disciplina.createMany([
      {id:1,nome:'banco de dados',curso_id:1},
      {id:2,nome:'backend',curso_id:1},
      {id:3,nome:'eng de software',curso_id:1},
      {id:4,nome:'estrutura de dados',curso_id:1},
      {id:5,nome:'anatomia',curso_id:2},
      {id:6,nome:'bioquimica',curso_id:2},
      {id:7,nome:'corpo humano',curso_id:2}

    ])
  }
}

module.exports = DisciplinaSeeder
