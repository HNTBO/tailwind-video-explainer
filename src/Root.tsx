import "./index.css";
import { Composition, Folder } from "remotion";
import { Episode01 } from "./episodes/ep01-css-intro";

// Video specs
const FPS = 30;
const WIDTH = 1280;
const HEIGHT = 720;

// Duration helper: converts seconds to frames
const seconds = (s: number) => Math.round(s * FPS);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Episodes">
        <Composition
          id="Ep01-CSS-Intro"
          component={Episode01}
          durationInFrames={seconds(120)} // 2 minutes
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        {/* Future episodes will be added here */}
      </Folder>
    </>
  );
};
