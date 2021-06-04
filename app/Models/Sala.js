'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sala extends Model {
    static getCampoSala(){
        return ['nome','tipo']
    }
    reservas(){
        return this.belongsTo('App/Models/Reserva') 
    }
}

module.exports = Sala
