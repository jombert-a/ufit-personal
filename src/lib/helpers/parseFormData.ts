export function parseFormData<T>(formData: FormData): Partial<T> {
  const parsedData: {[k: string]: string | File} = {}
  for (const pair of formData.entries()) {
    parsedData[pair[0]] = pair[1]
  }

  return parsedData as Partial<T>
}