import React from 'react'
import AppMapWrapper from './AppMapWrapper'
// import AppMapRenderMarkers from './AppMapRenderMarkers'


const mapStyles = {
  height: '100%',
  width: '100%',
}

function AppGoogleMap({
  data,
  disableFullscreenControl,
  defaultLat,
  defaultLong,
  polygonCoordinates,
  googleMapProps,
  onNormalClick,
}) {
//   const markers = data?.length > 0 ? data : []
  return (
    <div style={mapStyles}>
      <AppMapWrapper
        disableFullscreenControl={disableFullscreenControl}
        defaultLat={defaultLat}
        defaultLong={defaultLong}
        googleMapProps={googleMapProps}
        onNormalClick={onNormalClick}
      >
        {/* <AppMapRenderMarkers markers={markers} /> */}
        {/* {polygonCoordinates && polygonCoordinates.length > 0 && (
          <AppMapChildContainer polylineCoords={polygonCoordinates} />
        )} */}
      </AppMapWrapper>
    </div>
  )
}

export default React.memo(AppGoogleMap)
