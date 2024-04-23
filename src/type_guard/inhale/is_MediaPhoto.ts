import type { MediaPhoto } from '@custom_types'

import { is_string_array } from './is_string_array'

export const is_MediaPhoto = (value: any): value is MediaPhoto => {
  return is_string_array(value.file_paths)
}
