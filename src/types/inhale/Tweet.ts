import type { Media } from './Media'
import type { TwitterUser } from './TwitterUser'

export type Tweet = {
  author: TwitterUser
  url: string
  date: Date
  text: string
  has_media: boolean
  media: Media
}
