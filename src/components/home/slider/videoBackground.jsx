import React from 'react';
import './style.css'
export default function VideoBackground () {
    return (
        <div className="fullscreen-bg">
         <div className="video-background " >
             <video autoPlay loop muted>
                 <source src="../img/videoplayback.mp4" type="video/mp4" />
             </video>
         </div>
        </div>
    );
};

