import type { Inhale } from '@custom_types'

import { is_Tweet } from './is_Tweet'
import { is_date } from './is_date'
import { is_string_array } from './is_string_array'

export const is_Inhale = (value: any): value is Inhale => {
  return is_Tweet(value.tweet) && is_date(value.date) && is_string_array(value.tags)
}
