import type { MediaCard } from '@custom_types'

export const is_MediaCard = (value: any): value is MediaCard => {
  return typeof value.title === 'string' && typeof value.url === 'string' && typeof value.thumbnail_path === 'string'
}
