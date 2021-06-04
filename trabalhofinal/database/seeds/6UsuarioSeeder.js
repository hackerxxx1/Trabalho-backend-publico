'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const usuario = use('App/Models/Usuario')
class UsuarioSeeder {
  async run () {
    await usuario.createMany([
      {id:1,nome:'gabriel',codprof:'123'},
      {id:2,nome:'leirbag',codprof:'321'}
    ])
  }
}

module.exports = UsuarioSeeder
