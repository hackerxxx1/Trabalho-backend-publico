'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turno extends Model {
    static getCampoTurno(){
        return ['nome','usuario_id','curso_id']
    }
    cursos(){
        return this.hasMany('App/Models/Curso') 
    }
    turmas(){
        return this.hasMany('App/Models/Turma') 
    }
}

module.exports = Turno
