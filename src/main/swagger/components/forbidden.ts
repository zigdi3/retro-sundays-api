export const forbidden = {
  description: 'Requisição inválida',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
