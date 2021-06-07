'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with salas
 */
const Sala = use('App/Models/Sala')
class SalaController {
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
    return Sala.query().select('id','nome','tipo').paginate(page, perPage);
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
    const campos = await Sala.getCampoSala()
    const salas = await request.only(campos)
    return await Sala.create(salas)
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
     return await Sala.query().select('id','nome','tipo').with('reservas').where('id',params.id).fetch();
     
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
    const sala = await Sala.findOrFail(params.id)
    const campos = await Sala.getCampoSala()
    const dados = await request.only(campos)
    sala.merge(dados) 
    await sala.save() 
    return sala
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
      const sala = await Sala.findOrFail(params.id)
    return await sala.delete();
    }
}

module.exports = SalaController
