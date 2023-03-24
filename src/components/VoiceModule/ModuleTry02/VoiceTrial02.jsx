import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function VoiceTrial02() {
    const [isListening, setIsListening] = useState(false);
    const [command, setCommand] = useState("");

    const { transcript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (transcript) {
            setCommand(transcript);
            resetTranscript();
        }
    }, [transcript, resetTranscript]);

    useEffect(() => {
        if (isListening) {
            SpeechRecognition.startListening({ continuous: true });
        } else {
            SpeechRecognition.stopListening();
        }
    }, [isListening]);

    return (
        <div>
            <button onClick={() => setIsListening(!isListening)}>
                {isListening ? "Stop" : "Start"} listening
            </button>
            <p>{command}</p>
        </div>
    );
}

export default VoiceTrial02;
