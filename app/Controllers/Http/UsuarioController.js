'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usuarios
 */
const Usuario = use ('App/Models/Usuario')
class UsuarioController {
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
    return Usuario.query().select('id','nome','codprof').paginate(page, perPage);
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
    const campos = await Usuario.getCampoUsuario()
    const usuarios = await request.only(campos)
    return await Usuario.create(usuarios)
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
    return await Usuario.query().select('id','nome','codprof').where('id',params.id).fetch();
    //return await Usuario.query()
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
    const usuario = await Usuario.findOrFail(params.id)
    const campos = await Usuario.getCampoUsuario()
    const dados = await request.only(campos)
    usuario.merge(dados) 
    await usuario.save() 
    return usuario
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
    const usuario = await Usuario.findOrFail(params.id)
    return await usuario.delete();
  }
}

module.exports = UsuarioController
