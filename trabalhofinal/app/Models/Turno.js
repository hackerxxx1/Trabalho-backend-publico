'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turno extends Model {
    static getCampoTurno(){
        return ['nome','id_usuario','id_curso']
    }
    cursos(){
        return this.hasMany('App/Models/Curso') 
    }
    turmas(){
        return this.hasMany('App/Models/Turma') 
    }
}

module.exports = Turno
