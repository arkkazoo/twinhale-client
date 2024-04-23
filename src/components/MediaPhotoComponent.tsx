import type { MediaPhoto } from '@custom_types'

export { MediaPhotoComponent }

function MediaPhotoComponent(media: MediaPhoto) {
  return (
    <div className="media-frame">
      <div className="media-container">
        <div className="media-photo" style={{ backgroundImage: `url('${media.file_paths[0]}')` }} />
      </div>
    </div>
  )
}
