'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurnoSchema extends Schema {
  up () {
    this.create('turnos', (table) => {
      table.increments()
      table.string('nome',40)
      table
        .integer('id_usuario')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable()
      table
        .integer('id_curso')
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
