'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with disciplinas
 */
const Disciplina = use('App/Models/Disciplina')
class DisciplinaController {
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
    return Disciplina.query().select('id','nome','id_curso').paginate(page, perPage);
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
    const campos = await Disciplina.getCampoDisciplina()
    const disciplina = await request.only(campos)
    return await Disciplina.create(disciplina)
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
    return await Disciplina.query().select('id','nome','curso_id').with('curso').with('turmas').where('id',params.id).fetch();
  
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
    const disciplina = await Disciplina.findOrFail(params.id)
    const campos = await Disciplina.getCampoDisciplina()
    const dados = await request.only(campos)
    disciplina.merge(dados) 
    await disciplina.save() 
    return disciplina
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
    const disciplina = await Disciplina.findOrFail(params.id)
    return await disciplina.delete();
  }
}

module.exports = DisciplinaController
