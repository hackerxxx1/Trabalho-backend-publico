'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorariosSchema extends Schema {
  up () {
    this.create('horarios', (table) => {
      table.increments()
      table.string('hora',12).notNullable()
      table.string('dia',24).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('horarios')
  }
}

module.exports = HorariosSchema
