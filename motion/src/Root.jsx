import { Composition } from "remotion";
import { ProjectsReel, SCENE_FRAMES, FPS } from "./ProjectsReel.jsx";
import projects from "../../src/content/projects.json";

export const Root = () => (
  <Composition
    id="ProjectsReel"
    component={ProjectsReel}
    durationInFrames={SCENE_FRAMES * projects.length}
    fps={FPS}
    width={1200}
    height={675}
  />
);
