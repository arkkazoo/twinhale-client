import type { Tweet } from './Tweet'

export type Inhale = {
  tweet: Tweet
  date: Date
  tags: string[]
}

// inhale example

// const inhale_example: inhale = {
//   tweet: {
//     author: {
//       username: 'Donald J. Trump',
//       screen_name: 'realDonaldTrump',
//       icon_source: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg',
//     },
//     url: 'https://twitter.com/realDonaldTrump/status/1346652589673345024',
//     date: new Date('2021-01-06T02:59:31.000Z'),
//     text: 'BIG NEWS IN PENNSYLVANIA!',
//     has_media: true,
//     media: {
//       media_type: 'photo',
//       content_photo: {
//         file_paths: ['https://pbs.twimg.com/media/ErBFZE8XMAABqYi?format=jpg&name=small', 'https://pbs.twimg.com/media/ErBFZE8XIAEVXxT?format=jpg&name=360x360'],
//       },
//     },
//   },
//   date: new Date('2023-08-25T01:38:08.000Z'),
//   tags: ['politics'],
// }
