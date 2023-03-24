import React, { useRef } from 'react'
import Webcam from 'react-webcam';





const WebcamModule = () => {
  const showImage = () => {
    console.log(webRef.current.getScreenshot({ width: 1920, height: 1080 }));
  }
  const webRef = useRef(null);


  return (
    <div className='camera'>
      <Webcam ref={webRef} />
      <button onClick={() => {
        showImage();
      }}>
        Click For ScreenShot
      </button>
    </div>
  )
}

export default WebcamModule