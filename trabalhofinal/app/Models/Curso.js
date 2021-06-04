'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    static getCampoCurso(){
        return ['nome']
    }
    disciplinas(){
        return this.hasMany('App/Models/Disciplina')
    }
    turnos(){
        return this.hasMany('App/Models/Turno') 
    }
}

module.exports = Curso
