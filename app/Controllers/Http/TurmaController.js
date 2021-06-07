'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with turmas
 */
const Turma = use('App/Models/Turma')
class TurmaController {
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
    return Turma.query().select('id','codturma','id_usuario','id_disciplina','id_turno','id_horario').paginate(page, perPage);
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
      const campos = await Turma.getCampoTurma()
    const turmas = await request.only(campos)
    return await Turma.create(turmas)
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
      return await Turma.query().select('id','codturma','usuario_id','disciplina_id','turno_id','horario_id').with('turno').with('horario').with('usuario').with('disciplina').where('id',params.id).fetch();
    
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
    const turma = await Turma.findOrFail(params.id)
    const campos = await Turma.getCampoTurma()
    const dados = await request.only(campos)
    turma.merge(dados) 
    await turma.save() 
    return turma
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
      const turma = await Turma.findOrFail(params.id)
    return await turma.delete();
    }
}

module.exports = TurmaController
