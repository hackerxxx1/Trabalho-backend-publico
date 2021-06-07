'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static getCampoUsuario(){
        return ['nome', 'codprof']
    }
    reservas(){
        return this.hasMany('App/Models/Reserva').with('sala').with('horario').with('usuario') 
    }
    turmas(){
        return this.hasMany('App/Models/Turma').select('id','codturma','usuario_id','disciplina_id','turno_id','horario_id').with('turno').with('horario').with('usuario') 
    }
    turnos(){
        return this.hasMany('App/Models/Turno').select('id','nome','usuario_id','curso_id') 
    }
}

module.exports = Usuario
