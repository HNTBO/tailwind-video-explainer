import {
  SplitScreen,
  CodeEditor,
  VisualPreview,
  PreviewText,
} from "../../components";

const HTML_WITHOUT_CSS = `<h1>Welcome to my website</h1>
<p>This is a paragraph of text.</p>
<button>Click me</button>`;

export const Episode01: React.FC = () => {
  return (
    <SplitScreen
      left={
        <CodeEditor
          code={HTML_WITHOUT_CSS}
          title="index.html"
          typewriter
          charFrames={2}
          startFrame={15}
        />
      }
      right={
        <VisualPreview title="Browser" animateEntrance entranceFrame={30}>
          <div className="text-left space-y-2">
            <PreviewText className="text-xl">Welcome to my website</PreviewText>
            <PreviewText>This is a paragraph of text.</PreviewText>
            <button className="border border-slate-400 px-2 py-1 text-slate-800">
              Click me
            </button>
          </div>
        </VisualPreview>
      }
    />
  );
};
