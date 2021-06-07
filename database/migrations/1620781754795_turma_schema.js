'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.string('codturma').notNullable()
      table
        .integer('turno_id')
        .references('id')
        .inTable('turnos')
        .unsigned()
        .notNullable()
      table
        .integer('disciplina_id')
        .references('id')
        .inTable('disciplinas')
        .unsigned()
        .notNullable()
      table
        .integer('usuario_id')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable()
      table
        .integer('horario_id')
        .references('id')
        .inTable('horarios')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas')
  }
}

module.exports = TurmaSchema
