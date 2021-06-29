const getError = (code) => {
  switch (code) {
    case 'LIMIT_FILE_SIZE':
      return {
        status: 422,
        message: 'El tamaño del archivo supera el limite maximo'
      }

    case 'BAD_REQUEST':
      return {
        status: 400,
        message: 'La peticion es invalida'
      }

    case 'UNAUTHORIZED':
      return {
        status: 401,
        message: 'No estas authorizado para acceder'
      }

    default:
      return {
        status: 500,
        message: 'Oops! ocurrio un error interno del servidor'
      }
  }
}

const success = (res, data) => {
  return res.status(200).json(data)
}

const error = (res, code) => {
  const err = getError(code)
  return res.status(err.status).json({ code: 0, ...err })
}

module.exports = { 
  success,
  error
}
