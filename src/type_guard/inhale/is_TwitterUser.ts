import type { TwitterUser } from '@custom_types'

export const is_TwitterUser = (value: any): value is TwitterUser => {
  return typeof value.username === 'string' && typeof value.screen_name === 'string' && typeof value.icon_source === 'string'
}
