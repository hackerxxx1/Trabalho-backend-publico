'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reserva extends Model {
    static getCampoReserva(){
        return ['id_turma','id_sala','id_horario','id_usuario']
    }
    turmas(){
        return this.hasMany('App/Models/Turma') 
    }
    horarios(){
        return this.hasMany('App/Models/Horario') 
    }
    salas(){
        return this.hasMany('App/Models/Sala') 
    }
    usuarios(){
        return this.hasMany('App/Models/Usuario') 
    }
}

module.exports = Reserva
