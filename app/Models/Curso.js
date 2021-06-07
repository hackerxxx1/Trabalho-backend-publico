'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    static getCampoCurso(){
        return ['nome']
    }
    disciplinas(){
        return this.hasMany('App/Models/Disciplina').select('id','nome','curso_id')
    }
    turnos(){
        return this.hasMany('App/Models/Turno').select('id','nome','usuario_id','curso_id') 
    }
}

module.exports = Curso
