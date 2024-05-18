import type { Inhale } from '@custom_types'
import type React from 'react'
import { MediaPhotoComponent } from './MediaPhotoComponent'

export function InhaleComponent({ inhale }: { inhale: Inhale }): React.ReactElement {
  const tweet_date = convertDateToJapaneseTimezone(inhale.tweet.date)
  return (
    <article>
      <div className="column-user-icon">
        <div className="user-icon">
          <div className="user-icon-wrapper">
            <img alt="user-icon" draggable="true" src={inhale.tweet.author.icon_source} />
          </div>
        </div>
      </div>
      <div className="column-text">
        <div className="row-user">
          <div className="row-username">
            <div className="column-username">
              <span>{inhale.tweet.author.username}</span>
            </div>
            <div className="column-screen_name">
              <div>
                <span>@{inhale.tweet.author.screen_name}</span>
              </div>
              <div className="screen_name-date-spacer">
                <span>·</span>
              </div>
              <div>
                <span>{tweet_date}</span>
              </div>
            </div>
          </div>
          <div className="svg-button">
            <svg viewBox="0 0 24 24">
              <title>gear icon</title>
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </g>
            </svg>
          </div>
        </div>
        <div className="row-text">
          <span>{inhale.tweet.text}</span>
        </div>
        <div className="row-media">{inhale.tweet.has_media && inhale.tweet.media.media_type === 'photo' && MediaPhotoComponent(inhale.tweet.media.content_photo)}</div>
        <div className="row-tags">
          {inhale.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>
    </article>
  )
}

function convertDateToJapaneseTimezone(dateString: string | number | Date) {
  const date = new Date(dateString)
  const options: { year: 'numeric'; month: 'short'; day: 'numeric'; hour: '2-digit'; minute: '2-digit'; second: '2-digit'; hour12: false; timeZone: 'Asia/Tokyo' } = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' }
  return date.toLocaleString('en-US', options)
}
