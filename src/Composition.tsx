import { SplitScreen, CodeEditor, VisualPreview, PreviewBox } from "./components";

const DEMO_CODE = `<div class="p-4 bg-sky-500">
  <h1 class="text-2xl font-bold">
    Hello Tailwind!
  </h1>
</div>`;

export const MyComposition = () => {
  return (
    <SplitScreen
      left={
        <CodeEditor
          code={DEMO_CODE}
          title="index.html"
          typewriter
          charFrames={2}
          startFrame={10}
        />
      }
      right={
        <VisualPreview title="Result" animateEntrance entranceFrame={30}>
          <PreviewBox className="p-4">
            <h1 className="text-2xl font-bold">Hello Tailwind!</h1>
          </PreviewBox>
        </VisualPreview>
      }
    />
  );
};
