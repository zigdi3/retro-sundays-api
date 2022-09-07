export interface IHttpRequest {
  headers?: any
  pathParams?: any
  queryParams?: any
  body?: any
  auth?: any
}

export interface IHttpResponse {
  statusCode: number
  body?: any
}
