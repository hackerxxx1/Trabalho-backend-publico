'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Horario extends ValidatorAbstract {
  get rules () {
    return {
      hora: 'required|max:12|min:2',
      dia: 'required|max:24|min:3'
    }
  }
}

module.exports = Horario
