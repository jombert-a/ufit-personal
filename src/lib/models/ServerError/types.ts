// Basic
export interface PropertyIsCorrect {
  error: false
}

export interface PropertyWithError {
  error: true,
  message: string,
}

// Extending
export interface PropertyIsRequired extends PropertyWithError {
  required: true
}

export interface PropertyFormatIsSpecified extends PropertyWithError {
  format: true
  pattern: string
}

// Grouping
export type PropertyIsInError = PropertyIsRequired | PropertyFormatIsSpecified
export type PropertyStatus = PropertyIsInError | PropertyIsCorrect

export interface FailedActionUnprocessableBody {
  [k: string]: PropertyStatus,
}