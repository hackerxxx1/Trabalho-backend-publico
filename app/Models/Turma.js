'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCampoTurma(){
        return ['codturma','turno_id','disciplina_id','usuario_id','horario_id']
    }
    turno(){
        return this.belongsTo('App/Models/Turno').select('id','nome','usuario_id','curso_id') 
    }
    disciplina(){
        return this.belongsTo('App/Models/Disciplina').select('id','nome','curso_id')
    }
    usuario(){
        return this.belongsTo('App/Models/Usuario').select('id','nome','codprof') 
    }
    horario(){
        return this.belongsTo('App/Models/Horario') 
    }
}

module.exports = Turma
