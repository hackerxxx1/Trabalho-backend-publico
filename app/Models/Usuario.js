'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static getCampoUsuario(){
        return ['nome', 'codprof']
    }
    reservas(){
        return this.hasMany('App/Models/Reserva') 
    }
    turmas(){
        return this.hasMany('App/Models/Turma') 
    }
    turnos(){
        return this.hasMany('App/Models/Turno') 
    }
}

module.exports = Usuario
