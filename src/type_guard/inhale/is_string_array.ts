export const is_string_array = (value: any): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}
