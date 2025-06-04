import { ActionIcon } from "@mantine/core";
import React, { useRef, useState } from "react";
import IconMicroPhone from "../../assets/icons/IconMicrophone";
import IconMicroPhoneStop from "../../assets/icons/IconStopMicrophone";

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]); // Explicitly type as Blob[]
  console.log(audioURL);
  const startRecording = async () => {
    try {
      // Check for browser support
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser does not support microphone access.");
        return;
      }
      if (!window.MediaRecorder) {
        alert("Your browser does not support MediaRecorder API.");
        return;
      }

      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        // Type 'BlobEvent'
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);

        // Stop all tracks in the stream to release the microphone
        stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      if (error instanceof DOMException) {
        if (
          error.name === "NotAllowedError" ||
          error.name === "PermissionDeniedError"
        ) {
          console.error("Microphone access denied:", error);
          alert(
            "Microphone access denied. Please allow microphone access in your browser settings."
          );
        } else if (error.name === "NotFoundError") {
          console.error("No microphone found:", error);
          alert(
            "No microphone found. Please ensure a microphone is connected."
          );
        } else {
          console.error("Error accessing microphone:", error);
          alert(`An error occurred: ${error.message}`);
        }
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      {!isRecording ? (
        <ActionIcon
          onClick={startRecording}
          disabled={isRecording}
          variant="subtle"
        >
          <IconMicroPhone />
        </ActionIcon>
      ) : (
        <ActionIcon
          onClick={stopRecording}
          disabled={!isRecording}
          variant="subtle"
        >
          <IconMicroPhoneStop />
        </ActionIcon>
      )}
    </div>
  );
};

export default AudioRecorder;
