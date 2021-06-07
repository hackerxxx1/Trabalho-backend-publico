'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCampoTurma(){
        return ['codturma','turno_id','disciplina_id','usuario_id','horario_id']
    }
    turno(){
        return this.belongsTo('App/Models/Turno') 
    }
    disciplina(){
        return this.belongsTo('App/Models/Disciplina') 
    }
    usuario(){
        return this.belongsTo('App/Models/Usuario') 
    }
    horario(){
        return this.belongsTo('App/Models/Horario') 
    }
}

module.exports = Turma
