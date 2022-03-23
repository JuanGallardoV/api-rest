'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class DeniedAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(403).json({
      error: 'Acceso no permitido al recurso'
    })
  }
}

module.exports = DeniedAccessException
