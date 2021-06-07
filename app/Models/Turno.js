'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turno extends Model {
    static getCampoTurno(){
        return ['nome','usuario_id','curso_id']
    }
    curso(){
        return this.belongsTo('App/Models/Curso').select('id','nome') 
    }
    turmas(){
        return this.hasMany('App/Models/Turma').select('id','codturma','usuario_id','disciplina_id','turno_id','horario_id') 
    }
}

module.exports = Turno
