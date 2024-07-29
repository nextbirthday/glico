'use client'

import { Map, MapMarker } from 'react-kakao-maps-sdk'

declare global {
  interface Window {
    kakao: any
  }
}

export default function KakaoMap() {
  return (
    <>
      <Map center={{ lat: 37.503579801672366, lng: 127.04164724042336 }} style={{ width: '600px', height: '600px' }}>
        <MapMarker position={{ lat: 37.503579801672366, lng: 127.04164724042336 }}>
          <div style={{ color: '#000' }}>
            <span style={{ textAlign: 'center', margin: '0 auto' }}>AWS</span>
          </div>
        </MapMarker>
      </Map>
    </>
  )
}
