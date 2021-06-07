'use strict'

/*
|--------------------------------------------------------------------------
| TurnoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const turno = use('App/Models/Turno')
class TurnoSeeder {
  async run () {
    await turno.createMany([
      {id:1,nome:'matutino',usuario_id:2,curso_id:2},
      {id:2,nome:'vespertino',usuario_id:2,curso_id:2},
      {id:3,nome:'noturno',usuario_id:1,curso_id:1}
    ])
  }
}

module.exports = TurnoSeeder
