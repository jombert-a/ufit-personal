import type { PropertyIsCorrect, PropertyIsRequired } from "../types";

export function checkRequiredProperty(prop: unknown, message: string): PropertyIsRequired | PropertyIsCorrect {
  if (prop === null || prop === undefined) return {
    error: true,
    required: true,
    message,
  }

  return {
    error: false,
  }
}