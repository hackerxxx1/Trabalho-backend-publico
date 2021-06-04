'use strict'

/*
|--------------------------------------------------------------------------
| HorarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const horario = use('App/Models/Horario')
class HorarioSeeder {
  async run () {
     await horario.createMany([
       {id:1,hora:'08:00-10:00',dia:'segunda',},
       {id:2,hora:'10:00-12:00',dia:'segunda',},
       {id:3,hora:'14:00-16:00',dia:'segunda',},
       {id:4,hora:'16:00-18:00',dia:'segunda',},
       {id:5,hora:'19:00-21:00',dia:'segunda',},
       {id:6,hora:'21:00-23:00',dia:'segunda',},
     ])
  }
}

module.exports = HorarioSeeder
