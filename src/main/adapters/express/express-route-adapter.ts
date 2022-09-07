import { IController, IHttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      pathParams: req.params,
      headers: req.headers
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
