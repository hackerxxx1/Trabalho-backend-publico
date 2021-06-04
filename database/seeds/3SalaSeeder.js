'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const sala = use('App/Models/Sala')
class SalaSeeder {
  async run () {
    await sala.createMany([
      {id:1,nome:'sala1',tipo:'normal'},
      {id:2,nome:'sala2',tipo:'normal'},
      {id:3,nome:'sala3',tipo:'normal'},
      {id:4,nome:'sala4',tipo:'normal'},
      {id:5,nome:'sala5',tipo:'labsaude'},
      {id:6,nome:'sala6',tipo:'labsaude'},
      {id:7,nome:'sala7',tipo:'labinfo'},
      {id:8,nome:'sala8',tipo:'labinfo'}
    ])
  }
}

module.exports = SalaSeeder
