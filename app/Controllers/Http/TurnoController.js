'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with turnos
 */
const Turno = use('App/Models/Turno')
class TurnoController {
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
    return Turno.query().select('id','nome','id_usuario','id_curso').paginate(page, perPage);
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
    const campos = await Turno.getCampoTurno()
    const turnos = await request.only(campos)
    return await Turno.create(turnos)
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
    return await Turno.query().select('id','nome','id_usuario','id_curso').where('id',params.id).fetch();
    //return await Turno.query()
    //.with('disciplinas')
    //.first();
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
    const turno = await Turno.findOrFail(params.id)
    const campos = await Turno.getCampoTurno()
    const dados = await request.only(campos)
    turno.merge(dados) 
    await turno.save() 
    return turno
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
    const turno = await Turno.findOrFail(params.id)
    return await turno.delete();
  }
}

module.exports = TurnoController
