import { error } from "@sveltejs/kit"

interface ServerErrorBody {
  [K: string]: string | number | boolean
}

interface ServerErrorMissingBody extends ServerErrorBody {
  missing: true
}

export function getServerMissingBody(body: Partial<ServerErrorBody>): ServerErrorMissingBody {
  const result: ServerErrorMissingBody = {
    missing: true
  }

  for (const key in body) {
    result[key] = body[key] || ''
  }

  return result
}

export function getServerUnprocessableContentError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(422, {message, ...body})
  }

export function getServerNotFoundError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(404, {message, ...body})
  }

export function getServerForbiddenError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(403, {message, ...body})
  }

export function getServerUnauthorizedError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(401, {message, ...body})
  }

export function getServerConflictError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(409, {message, ...body})
  }

export function getServerError
  <B extends ServerErrorBody = ServerErrorBody>(message = '', body?: B) {
    return error(400, {message, ...body})
  }

