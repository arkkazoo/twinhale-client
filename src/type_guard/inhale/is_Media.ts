import type { Media } from '@custom_types'

import { is_MediaCard } from './is_MediaCard'
import { is_MediaPhoto } from './is_MediaPhoto'
import { is_MediaVideo } from './is_MediaVideo'

export const is_Media = (value: any): value is Media => {
  if (value.media_type === 'photo') {
    return is_MediaPhoto(value.content_photo)
  }
  if (value.media_type === 'video') {
    return is_MediaVideo(value.content_video)
  }
  if (value.media_type === 'card') {
    return is_MediaCard(value.content_card)
  }
  return false
}
