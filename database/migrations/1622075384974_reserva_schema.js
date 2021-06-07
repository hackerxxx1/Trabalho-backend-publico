'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table
        .integer('turma_id')
        .references('id')
        .inTable('turmas')
        .unsigned()
        .notNullable()
      table
        .integer('sala_id')
        .references('id')
        .inTable('salas')
        .unsigned()
        .notNullable()
      table
        .integer('horario_id')
        .references('id')
        .inTable('horarios')
        .unsigned()
        .notNullable()
      table
        .integer('usuario_id')
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
