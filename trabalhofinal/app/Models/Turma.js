'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCampoTurma(){
        return ['codturma','id_turno','id_disciplina','id_usuario','id_horario']
    }
    turnos(){
        return this.belongsTo('App/Models/Turno') 
    }
    disciplinas(){
        return this.belongsTo('App/Models/Disciplina') 
    }
    usuarios(){
        return this.belongsTo('App/Models/Usuario') 
    }
    Horarios(){
        return this.belongsTo('App/Models/Horario') 
    }
}

module.exports = Turma
