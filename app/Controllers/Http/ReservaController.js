'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with horarios
 */
const Reserva = use('App/Models/Reserva')
class ReservaController {
     /**
   * Show a list of all disciplinas.
   * GET disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
    perPage = perPage ? perPage : 10
    return Reserva.query().paginate(page, perPage);
}

/**
 * Render a form to be used for creating a new disciplina.
 * GET disciplinas/create
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */

async store ({ request, response }) {
    const campos = await Reserva.getCampoReserva()
    const reservas = await request.only(campos)
    return await Reserva.create(reservas)
}

/**
 * Display a single disciplina.
 * GET disciplinas/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async show ({ params, request, response, view }) {
  return await Reserva.query().with('sala').with('horario').with('usuario').where('id',params.id).fetch();
  
}

/**
 * Render a form to update an existing disciplina.
 * GET disciplinas/:id/edit
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async update ({ params, request, response }) {
  const reserva = await Reserva.findOrFail(params.id)
    const campos = await Reserva.getCampoReserva()
    const dados = await request.only(campos)
    reserva.merge(dados) 
    await reserva.save() 
    return reserva
}

/**
 * Delete a disciplina with id.
 * DELETE disciplinas/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async destroy ({ params, request, response }) {
  const reserva = await Reserva.findOrFail(params.id)
  return await reserva.delete();
}
}

module.exports = ReservaController
