import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";

import SampleVideo from "../../assets/videos/sample_video.mp4";

import Player from "../../librarys/player";
import { DispatchContext, StateContext } from "../../librarys/context";

const Container = styled.div`
  max-width: 20%;
  min-width: 280px;
  width: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
`;

const Video = styled.video`
  width: 100%;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Progress = styled.div.attrs((props) => ({
  style: {
    width:
      (props.$playback === null ? 0 : props.$playback / props.$duration) * 100 +
      "%",
  },
}))`
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
`;

const GuideSection = ({ play }) => {
  const video = useRef(null);
  const [duration, setDuration] = useState(0);
  const [playback, setPlayback] = useState(null);

  const dispatch = useContext(DispatchContext);
  const { guideStatus } = useContext(StateContext);

  useEffect(() => {
    if (guideStatus) {
      video.current.currentTime = 0;
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [guideStatus]);

  function onGuideLoad(event) {
    Player.guideDuration = event.target.duration;
  }

  function onTimeUpdate(event) {
    setPlayback(event.target.currentTime);
    setDuration(event.target.duration);
  }

  function onEnded(event) {
    dispatch({ type: "stopGuide" });
    Player.onGuideComplete();
  }

  return (
    <Container>
      <Video
        ref={video}
        src={SampleVideo}
        onLoadedData={onGuideLoad}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
      <ProgressContainer>
        <Progress $duration={duration} $playback={playback} />
      </ProgressContainer>
    </Container>
  );
};

export default GuideSection;