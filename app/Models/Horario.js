'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Horario extends Model {
    static getCampoHorario(){
        return ['hora','dia']
    }
    reservas(){
        return this.hasMany('App/Models/Reserva')
    }
}

module.exports = Horario
