import { Timeline } from '@components/Timeline'
import type { Inhale } from '@custom_types'
import { useEffect, useState } from 'react'

export { Home }

function Home() {
  const [inhales, setInhales] = useState<Inhale[]>([])

  useEffect(() => {
    ;(async () => {
      const result = await fetchInhales()
      console.info(result)
      setInhales(result)
    })()
  }, [])
  return (
    <div id="wrapper-page">
      <div id="sidemenu" />
      <div id="main">
        <Timeline inhales={inhales} />
      </div>
    </div>
  )
}

const url = 'http://192.168.11.18:24041/inhale'
async function fetchInhales(): Promise<Inhale[]> {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
