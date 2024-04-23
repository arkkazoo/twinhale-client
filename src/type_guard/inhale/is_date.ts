export const is_date = (value: any): value is Date => {
  // new Dateにnullishな値を入れると現在時刻が返ってくるので、nullishな値はここで無効判定を行う
  const property_exists = !!value
  const is_invalid_date = new Date(value).toString() === 'Invalid Date'
  return property_exists && !is_invalid_date
}
