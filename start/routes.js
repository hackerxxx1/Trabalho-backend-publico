'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})



Route.resource('/cursos', 'CursoController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Curso' ],
]))

Route.resource('/disciplinas', 'DisciplinaController')
.apiOnly()
.validator(new Map([
     [['store', 'update'], 'Disciplina' ],
     ]))
  
Route.resource('/salas', 'SalaController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Sala' ],
]))

Route.resource('/turmas', 'TurmaController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Turma' ],
     ]))

Route.resource('/turnos', 'TurnoController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Turnos' ],
     ]))
     
Route.resource('/horarios', 'HorarioController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Horario' ],
  ]))

Route.resource('/reservas', 'ReservaController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Reserva' ],
    ])) 

Route.resource('/usuarios', 'UsuarioController')
.apiOnly()
.validator(new Map([
[['store', 'update'], 'Usuario' ],
    ]))    