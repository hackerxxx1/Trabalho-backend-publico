'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const curso = use('App/Models/Curso')
class CursoSeeder {
  async run () {
    await curso.createMany([
      {id:1, nome:'ADS'},
      {id:2, nome:'enfermagem'}
    ])
  }
}

module.exports = CursoSeeder
