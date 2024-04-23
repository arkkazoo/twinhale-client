import type { MediaVideo } from '@custom_types'

export const is_MediaVideo = (value: any): value is MediaVideo => {
  return typeof value.file_path === 'string' && typeof value.thumbnail_path === 'string'
}
