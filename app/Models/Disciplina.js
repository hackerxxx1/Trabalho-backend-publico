'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
    static getCampoDisciplina(){
        return ['nome','curso_id']
    }
    curso(){
        return this.belongsTo('App/Models/Curso').select('id','nome').with('turnos') 
    }
    turmas(){ 
        return this.hasMany('App/Models/Turma').select('id','codturma','usuario_id','disciplina_id','turno_id','horario_id').with('turno').with('horario').with('usuario')                
   }
}

module.exports = Disciplina
