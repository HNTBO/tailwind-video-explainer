import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  interpolate,
  spring,
} from "remotion";
import { Audio } from "@remotion/media";
import { CodeEditor, VisualPreview, SplitScreen } from "../../components";

// ============================================================================
// CODE SNIPPETS
// ============================================================================

const HTML_UNSTYLED = `<h1>Welcome to my website</h1>
<p>This is a paragraph of text.</p>
<button>Click me</button>`;

const HTML_WITH_CLASSES = `<h1 class="title">Welcome</h1>
<p class="intro">This is styled text.</p>
<button class="btn">Click me</button>`;

const CSS_CODE = `.title {
  color: #0ea5e9;
  font-size: 2rem;
  font-weight: bold;
}

.intro {
  color: #334155;
  line-height: 1.6;
}

.btn {
  background: #0ea5e9;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}`;

// ============================================================================
// SCENE COMPONENTS
// ============================================================================

/** Scene 1: Plain HTML code with typewriter */
const SceneHtmlCode: React.FC = () => {
  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center p-12">
      <div className="w-full max-w-3xl">
        <CodeEditor
          code={HTML_UNSTYLED}
          title="index.html"
          typewriter
          charFrames={3}
          startFrame={15}
        />
      </div>
    </AbsoluteFill>
  );
};

/** Scene 2: Split screen - code left, unstyled preview right */
const SceneUnstyledPreview: React.FC = () => {
  return (
    <SplitScreen
      left={<CodeEditor code={HTML_UNSTYLED} title="index.html" />}
      right={
        <VisualPreview title="Browser" animateEntrance entranceFrame={0}>
          <div className="text-left space-y-3 p-4">
            <h1 className="text-2xl font-serif">Welcome to my website</h1>
            <p className="font-serif">This is a paragraph of text.</p>
            <button className="font-serif border border-black px-1">
              Click me
            </button>
          </div>
        </VisualPreview>
      }
    />
  );
};

/** Scene 3: CSS transforms the preview */
const SceneCssTransforms: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transformProgress = spring({
    frame: frame - 30,
    fps,
    config: { damping: 100 },
  });

  return (
    <SplitScreen
      left={
        <CodeEditor
          code={HTML_WITH_CLASSES}
          title="index.html"
          highlightLines={[1, 2, 3]}
        />
      }
      right={
        <VisualPreview title="Browser">
          <div className="text-left space-y-3 p-4">
            <h1
              style={{
                fontSize: interpolate(transformProgress, [0, 1], [24, 32]),
                fontWeight: interpolate(transformProgress, [0, 1], [400, 700]),
                color: interpolate(
                  transformProgress,
                  [0, 1],
                  [0, 1]
                ) > 0.5 ? "#0ea5e9" : "#000000",
                fontFamily: "sans-serif",
              }}
            >
              Welcome
            </h1>
            <p
              style={{
                color: interpolate(
                  transformProgress,
                  [0, 1],
                  [0, 1]
                ) > 0.5 ? "#334155" : "#000000",
                lineHeight: interpolate(transformProgress, [0, 1], [1.2, 1.6]),
                fontFamily: "sans-serif",
              }}
            >
              This is styled text.
            </p>
            <button
              style={{
                backgroundColor: interpolate(
                  transformProgress,
                  [0, 1],
                  [0, 1]
                ) > 0.5 ? "#0ea5e9" : "transparent",
                color: interpolate(
                  transformProgress,
                  [0, 1],
                  [0, 1]
                ) > 0.5 ? "#ffffff" : "#000000",
                padding: `${interpolate(transformProgress, [0, 1], [2, 8])}px ${interpolate(transformProgress, [0, 1], [4, 16])}px`,
                borderRadius: interpolate(transformProgress, [0, 1], [0, 4]),
                border: interpolate(transformProgress, [0, 1], [0, 1]) > 0.5 ? "none" : "1px solid black",
                fontFamily: "sans-serif",
              }}
            >
              Click me
            </button>
          </div>
        </VisualPreview>
      }
    />
  );
};

/** Scene 4: Highlight class attribute */
const SceneHighlightClass: React.FC = () => {
  const frame = useCurrentFrame();

  const highlightOpacity = interpolate(
    frame,
    [0, 15, 30],
    [0, 1, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center p-12">
      <div className="w-full max-w-3xl relative">
        <CodeEditor
          code={HTML_WITH_CLASSES}
          title="index.html"
          highlightLines={[1]}
        />
        {/* Highlight overlay for class="title" */}
        <div
          className="absolute top-24 left-32 bg-sky-500/30 rounded px-2 py-1 border-2 border-sky-400"
          style={{ opacity: highlightOpacity }}
        >
          <span className="text-sky-300 font-mono text-sm">class="title"</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 5: Zoom on class="title" */
const SceneZoomClass: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const zoom = interpolate(scale, [0, 1], [1, 1.5]);

  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center">
      <div
        className="bg-slate-800 rounded-xl p-8 border border-slate-600"
        style={{ transform: `scale(${zoom})` }}
      >
        <p className="text-slate-400 text-lg mb-4">In your HTML:</p>
        <code className="text-2xl">
          <span className="text-sky-400">&lt;h1 </span>
          <span className="text-amber-300">class</span>
          <span className="text-slate-400">=</span>
          <span className="text-emerald-400">"title"</span>
          <span className="text-sky-400">&gt;</span>
        </code>
        <p className="text-slate-500 text-sm mt-4">
          ↑ This creates a "hook" for CSS
        </p>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 6: CSS rule being written */
const SceneCssRule: React.FC = () => {
  return (
    <SplitScreen
      ratio={0.45}
      left={
        <div className="h-full flex flex-col justify-center p-4">
          <p className="text-slate-400 text-lg mb-4">HTML hook:</p>
          <code className="text-xl bg-slate-800 p-3 rounded">
            <span className="text-amber-300">class</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-400">"title"</span>
          </code>
          <p className="text-slate-500 text-2xl my-4 text-center">↓</p>
          <p className="text-slate-400 text-lg mb-4">CSS selector:</p>
          <code className="text-xl bg-slate-800 p-3 rounded">
            <span className="text-sky-400">.title</span>
            <span className="text-slate-400"> {"{ ... }"}</span>
          </code>
        </div>
      }
      right={
        <CodeEditor
          code={CSS_CODE}
          title="styles.css"
          typewriter
          charFrames={2}
          startFrame={30}
          highlightLines={[1, 2, 3, 4, 5]}
        />
      }
    />
  );
};

/** Scene 7: Reusable classes */
const SceneReusableClasses: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const item1 = spring({ frame, fps, config: { damping: 100 } });
  const item2 = spring({ frame: frame - 15, fps, config: { damping: 100 } });
  const item3 = spring({ frame: frame - 30, fps, config: { damping: 100 } });

  return (
    <AbsoluteFill className="bg-slate-950 flex flex-col items-center justify-center p-12">
      <p className="text-slate-400 text-xl mb-8">
        One class, applied to many elements:
      </p>
      <div className="flex gap-6">
        {[item1, item2, item3].map((progress, i) => (
          <div
            key={i}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium text-lg"
            style={{
              opacity: interpolate(progress, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
            }}
          >
            .btn
          </div>
        ))}
      </div>
      <p className="text-slate-500 text-lg mt-8">
        Define once → Apply anywhere
      </p>
    </AbsoluteFill>
  );
};

/** Scene 8: Before/After comparison */
const SceneBeforeAfter: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 100 } });

  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center p-8">
      <div className="flex gap-8 items-center">
        {/* Before */}
        <div
          className="bg-slate-800 rounded-lg p-6 border border-slate-700"
          style={{
            opacity: interpolate(slideIn, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(slideIn, [0, 1], [-50, 0])}px)`,
          }}
        >
          <p className="text-slate-500 text-sm mb-3">HTML only</p>
          <div className="bg-white p-4 rounded text-left">
            <h1 className="font-serif text-xl">Welcome</h1>
            <p className="font-serif text-sm">Text here.</p>
            <button className="font-serif border border-black px-1 text-sm">
              Click
            </button>
          </div>
        </div>

        {/* Arrow */}
        <div
          className="text-4xl text-sky-500"
          style={{ opacity: interpolate(slideIn, [0, 1], [0, 1]) }}
        >
          →
        </div>

        {/* After */}
        <div
          className="bg-slate-800 rounded-lg p-6 border border-slate-700"
          style={{
            opacity: interpolate(slideIn, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(slideIn, [0, 1], [50, 0])}px)`,
          }}
        >
          <p className="text-slate-500 text-sm mb-3">HTML + CSS</p>
          <div className="bg-white p-4 rounded text-left">
            <h1 className="text-2xl font-bold text-sky-500">Welcome</h1>
            <p className="text-slate-600 text-sm leading-relaxed">Text here.</p>
            <button className="bg-sky-500 text-white px-3 py-1 rounded text-sm">
              Click
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-16 text-slate-400 text-xl">
        HTML = Structure · CSS = Style
      </p>
    </AbsoluteFill>
  );
};

/** Scene 9: Tailwind teaser */
const SceneTailwindTeaser: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="bg-slate-950 flex flex-col items-center justify-center">
      <div style={{ opacity: fadeIn }}>
        <p className="text-slate-400 text-xl mb-6">Coming up:</p>
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Tailwind CSS
          </div>
        </div>
        <p className="text-slate-500 text-lg mt-6">
          A faster way to write CSS
        </p>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 10: End card */
const SceneEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({ frame, fps, config: { damping: 100 } });

  return (
    <AbsoluteFill className="bg-slate-950 flex flex-col items-center justify-center">
      <div
        style={{
          opacity: interpolate(fadeIn, [0, 1], [0, 1]),
          transform: `scale(${interpolate(fadeIn, [0, 1], [0.9, 1])})`,
        }}
      >
        <p className="text-slate-500 text-lg mb-4">Next Episode</p>
        <h2 className="text-4xl font-bold text-white mb-4">The Box Model</h2>
        <p className="text-slate-400 text-xl">
          How every element takes up space
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN COMPOSITION
// ============================================================================

export const Episode01: React.FC = () => {
  // Frame timings from script (at 30fps)
  const SCENE_HTML = 0;
  const SCENE_PREVIEW = 300;      // 0:10
  const SCENE_TRANSFORM = 540;    // 0:18
  const SCENE_HIGHLIGHT = 900;    // 0:30
  const SCENE_ZOOM = 1140;        // 0:38
  const SCENE_CSS_RULE = 1380;    // 0:46
  const SCENE_REUSABLE = 1680;    // 0:56
  const SCENE_BEFORE_AFTER = 1920; // 1:04
  const SCENE_TAILWIND = 2220;    // 1:14
  const SCENE_END = 2460;         // 1:22

  return (
    <AbsoluteFill className="bg-slate-950">
      {/* Audio track */}
      <Audio src={staticFile("audio/ep01/voiceover.mp3")} />

      {/* Scene 1: Plain HTML code */}
      <Sequence from={SCENE_HTML} durationInFrames={SCENE_PREVIEW - SCENE_HTML}>
        <SceneHtmlCode />
      </Sequence>

      {/* Scene 2: Unstyled preview */}
      <Sequence from={SCENE_PREVIEW} durationInFrames={SCENE_TRANSFORM - SCENE_PREVIEW}>
        <SceneUnstyledPreview />
      </Sequence>

      {/* Scene 3: CSS transforms */}
      <Sequence from={SCENE_TRANSFORM} durationInFrames={SCENE_HIGHLIGHT - SCENE_TRANSFORM}>
        <SceneCssTransforms />
      </Sequence>

      {/* Scene 4: Highlight class */}
      <Sequence from={SCENE_HIGHLIGHT} durationInFrames={SCENE_ZOOM - SCENE_HIGHLIGHT}>
        <SceneHighlightClass />
      </Sequence>

      {/* Scene 5: Zoom on class */}
      <Sequence from={SCENE_ZOOM} durationInFrames={SCENE_CSS_RULE - SCENE_ZOOM}>
        <SceneZoomClass />
      </Sequence>

      {/* Scene 6: CSS rule */}
      <Sequence from={SCENE_CSS_RULE} durationInFrames={SCENE_REUSABLE - SCENE_CSS_RULE}>
        <SceneCssRule />
      </Sequence>

      {/* Scene 7: Reusable classes */}
      <Sequence from={SCENE_REUSABLE} durationInFrames={SCENE_BEFORE_AFTER - SCENE_REUSABLE}>
        <SceneReusableClasses />
      </Sequence>

      {/* Scene 8: Before/After */}
      <Sequence from={SCENE_BEFORE_AFTER} durationInFrames={SCENE_TAILWIND - SCENE_BEFORE_AFTER}>
        <SceneBeforeAfter />
      </Sequence>

      {/* Scene 9: Tailwind teaser */}
      <Sequence from={SCENE_TAILWIND} durationInFrames={SCENE_END - SCENE_TAILWIND}>
        <SceneTailwindTeaser />
      </Sequence>

      {/* Scene 10: End card */}
      <Sequence from={SCENE_END} durationInFrames={300}>
        <SceneEndCard />
      </Sequence>
    </AbsoluteFill>
  );
};
