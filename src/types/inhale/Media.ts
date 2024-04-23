import type { MediaCard } from './MediaCard'
import type { MediaPhoto } from './MediaPhoto'
import type { MediaVideo } from './MediaVideo'

export type Media =
  | {
      media_type: 'photo'
      content_photo: MediaPhoto
    }
  | {
      media_type: 'video'
      content_video: MediaVideo
    }
  | {
      media_type: 'card'
      content_video: MediaCard
    }
