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
      {id:1,nome:'matutino',id_usuario:2,id_curso:2},
      {id:2,nome:'vespertino',id_usuario:2,id_curso:2},
      {id:3,nome:'noturno',id_usuario:1,id_curso:1}
    ])
  }
}

module.exports = TurnoSeeder
