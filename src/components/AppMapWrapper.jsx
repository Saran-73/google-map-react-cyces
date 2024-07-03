import  { memo } from 'react'
import { GoogleMap, GoogleMapApiLoader } from 'react-google-map-wrapper'
import { Suspense } from 'react'




function AppMapWrapper({
  children,
  disableFullscreenControl,
  defaultLat,
  defaultLong,
  googleMapProps,
    onNormalClick,
    GoogleMapApiKey,
}) {
  const DEFAULT_CENTER = {
    lat: defaultLat || 41.8467697700777,
    lng: defaultLong || -87.68396373226321,
  }
  return (
    <Suspense fallback={<div style={{display: 'flex', justifyContent:'center', alignItems:"center"}}>Loading</div>}>
      <GoogleMapApiLoader apiKey={GoogleMapApiKey} suspense>
        <GoogleMap
          onClick={onNormalClick}
          className="h-full mobile-radius"
          zoom={11}
          initialCenter={DEFAULT_CENTER}
          mapOptions={{
            gestureHandling: 'greedy', // avoid the need to press cmd when scrolling the map
            fullscreenControl: !disableFullscreenControl,
            minZoom: 8,
            maxZoom: 17,
            clickableIcons: false,
          }}
        //   onBoundsChanged={(_map) => {
        //     if (googleMapProps?.onBoundsChange) {
        //       googleMapProps.onBoundsChange(_map)
        //     }
        //   }}
        //   onDragEnd={(_map) => {
        //     if (googleMapProps?.onDragEnd) {
        //       googleMapProps.onDragEnd(_map)
        //     }
        //   }}
        //   onZoomChanged={(_map) => {
        //     if (googleMapProps?.onZoomChanged) {
        //       googleMapProps.onZoomChanged(_map)
        //     }
        //   }}
          // onLoad={(_map) => {
          // }}
        >
          {children}
        </GoogleMap>
      </GoogleMapApiLoader>
    </Suspense>
  )
}

export default memo(AppMapWrapper)
