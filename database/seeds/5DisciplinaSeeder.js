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
      {id:1,nome:'banco de dados',id_curso:1},
      {id:2,nome:'backend',id_curso:1},
      {id:3,nome:'eng de software',id_curso:1},
      {id:4,nome:'estrutura de dados',id_curso:1},
      {id:5,nome:'anatomia',id_curso:2},
      {id:6,nome:'bioquimica',id_curso:2},
      {id:7,nome:'corpo humano',id_curso:2}

    ])
  }
}

module.exports = DisciplinaSeeder
