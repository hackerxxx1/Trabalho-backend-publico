'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with horarios
 */
const Horario = use('App/Models/Horario')
class HorarioController {
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
    return Horario.query().select('id','hora','dia').paginate(page, perPage);
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
    const campos = await Horario.getCampoHorario()
    const horarios = await request.only(campos)
    return await Horario.create(horarios)
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
      return await Horario.query().select('id','hora','dia').with('reservas').where('id',params.id).fetch();
  
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
    const horario = await Horario.findOrFail(params.id)
    const campos = await Horario.getCampoHorario()
    const dados = await request.only(campos)
    horario.merge(dados) 
    await horario.save() 
    return horario
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
      const horario = await Horario.findOrFail(params.id)
      return await horario.delete();
    }
}

module.exports = HorarioController
