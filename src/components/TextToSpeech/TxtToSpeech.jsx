import React, { useState } from 'react'

const TxtToSpeech = () => {
    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()

    const speechHandler = (msg) => {
        msg.text = ourText
        window.speechSynthesis.speak(msg)
    }
    const speak = () => {
        speechHandler(msg);
        console.log("This is msg",msg);
        console.log();
    }
    return (
        <div>
            <h1>React Text to Speech App</h1>
            <input
                type='text'
                value={ourText}
                placeholder='Enter Text'
                onChange={(e) => setOurText(e.target.value)}
            />
            {/* <button onClick={() => speechHandler(msg)}>SPEAK</button> */}
            setInterval({speak()}, 1000 );
            <script src="keypress.js"></script>
        </div>
    )
}

export default TxtToSpeech