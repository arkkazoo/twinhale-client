import type { Tweet } from '@custom_types'

import { is_Media } from './is_Media'
import { is_TwitterUser } from './is_TwitterUser'
import { is_date } from './is_date'

export const is_Tweet = (value: any): value is Tweet => {
  // tweet_text may be null
  const properties_exists = is_TwitterUser(value.author) && typeof value.url === 'string' && is_date(value.date) && typeof value.has_media === 'boolean'
  const has_valid_text = typeof value.text === 'string' || value.text === null
  if (!properties_exists || !has_valid_text) {
    return false
  }
  if (value.has_media) {
    return is_Media(value.media)
  }
  return true
}
