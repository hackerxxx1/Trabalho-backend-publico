'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table
        .integer('id_turma')
        .references('id')
        .inTable('turmas')
        .unsigned()
        .notNullable()
      table
        .integer('id_sala')
        .references('id')
        .inTable('salas')
        .unsigned()
        .notNullable()
      table
        .integer('id_horario')
        .references('id')
        .inTable('horarios')
        .unsigned()
        .notNullable()
      table
        .integer('id_usuario')
        .references('id')
        .inTable('usuarios')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
