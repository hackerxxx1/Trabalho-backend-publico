'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reserva extends Model {
    static getCampoReserva(){
        return ['turma_id','sala_id','horario_id','usuario_id']
    }
   sala(){
       return this.belongsTo('App/Models/Sala')
   }
   horario(){
      return this.belongsTo('App/Models/Horario')
   }
   usuario(){
    return this.belongsTo('App/Models/Usuario')
    }
    
  
}

module.exports = Reserva
