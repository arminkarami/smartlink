import React from 'react'

const Map = (data) => {
  return (
    <section>
    <div>
        <div className="row">
            <div className="col-12">
                <div className="map-container">
                    <div className="mapouter ">
                        <div className="gmap_canvas" dangerouslySetInnerHTML={{ __html:data.data.data.data[0]!==undefined && data.data.data.data[0].mapLocation }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Map