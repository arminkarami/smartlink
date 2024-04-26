import React from 'react'

const Map = () => {
  return (
    <section>
    <div>
        <div className="row">
            <div className="col-12">
                <div className="map-container">
                    <div className="mapouter ">
                        <div className="gmap_canvas">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.3004066634885!2d16.3563800766626!3d48.20082937125052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078ff2f1f949%3A0xa07ae2c454a3ad72!2sMariahilfer%20Str.%2019-21%2F2%203%2C%201060%20Wien!5e0!3m2!1sen!2sat!4v1706005472541!5m2!1sen!2sat"
                             width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                             referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <a href="https://embedgooglemap.net/129/"></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Map