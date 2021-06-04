'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.string('codturma').notNullable()
      table
        .integer('id_turno')
        .references('id')
        .inTable('turnos')
        .unsigned()
        .notNullable()
      table
        .integer('id_disciplina')
        .references('id')
        .inTable('disciplinas')
        .unsigned()
        .notNullable()
      table
        .integer('id_usuario')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable()
      table
        .integer('id_horario')
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
