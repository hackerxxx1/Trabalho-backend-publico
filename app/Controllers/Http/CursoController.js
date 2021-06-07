'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cursos
 */
const Curso = use('App/Models/Curso')
class CursoController {
  /**
   * Show a list of all cursos.
   * GET cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
    perPage = perPage ? perPage : 10
    return Curso.query().select('id','nome').paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new curso.
   * GET cursos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
  async store ({ request, response }) {
    const campos = await Curso.getCampoCurso()
    const cursos = await request.only(campos)
    return await Curso.create(cursos)
  }

  /**
   * Display a single curso.
   * GET cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Curso.query().select('id','nome').where('id',params.id).fetch();
    return await Curso.query()
                   .with('disciplinas')
                   .where('id',params.id)
                   .fetch()
  }

  /**
   * Render a form to update an existing curso.
   * GET cursos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async update ({ params, request, response }) {
    const curso = await Curso.findOrFail(params.id)
    const campos = await Curso.getCampoCurso()
    const dados = await request.only(campos)
    curso.merge(dados) 
    await curso.save() 
    return curso 
  }

  /**
   * Delete a curso with id.
   * DELETE cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const curso = await Curso.findOrFail(params.id)
    return await curso.delete();
  }
}

module.exports = CursoController
