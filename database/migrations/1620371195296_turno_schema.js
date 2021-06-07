'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurnoSchema extends Schema {
  up () {
    this.create('turnos', (table) => {
      table.increments()
      table.string('nome',40)
      table
        .integer('usuario_id')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable()
      table
        .integer('curso_id')
        .references('id')
        .inTable('cursos')
        .unsigned()
        .notNullable()  
      table.timestamps()
    })
  }

  down () {
    this.drop('turnos')
  }
}

module.exports = TurnoSchema
