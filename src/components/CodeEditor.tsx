import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

interface CodeEditorProps {
  /** The code to display */
  code: string;
  /** Title shown in the editor header */
  title?: string;
  /** Enable typewriter animation */
  typewriter?: boolean;
  /** Frames per character for typewriter (default: 2) */
  charFrames?: number;
  /** Frame to start typewriter animation */
  startFrame?: number;
  /** Highlight specific line numbers (1-indexed) */
  highlightLines?: number[];
}

// Simple syntax highlighting for HTML/CSS/Tailwind
const highlightCode = (code: string): React.ReactNode[] => {
  const lines = code.split("\n");

  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let tokenIndex = 0;

    while (remaining.length > 0) {
      // HTML tags
      const tagMatch = remaining.match(/^(<\/?[\w-]+)/);
      if (tagMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-sky-400">
            {tagMatch[1]}
          </span>
        );
        remaining = remaining.slice(tagMatch[1].length);
        continue;
      }

      // Closing bracket
      const closeBracket = remaining.match(/^(\/?>)/);
      if (closeBracket) {
        tokens.push(
          <span key={tokenIndex++} className="text-sky-400">
            {closeBracket[1]}
          </span>
        );
        remaining = remaining.slice(closeBracket[1].length);
        continue;
      }

      // Attribute names
      const attrMatch = remaining.match(/^([\w-]+)=/);
      if (attrMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-amber-300">
            {attrMatch[1]}
          </span>
        );
        tokens.push(
          <span key={tokenIndex++} className="text-slate-400">
            =
          </span>
        );
        remaining = remaining.slice(attrMatch[0].length);
        continue;
      }

      // Strings (double quotes)
      const stringMatch = remaining.match(/^"([^"]*)"/);
      if (stringMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-emerald-400">
            "{stringMatch[1]}"
          </span>
        );
        remaining = remaining.slice(stringMatch[0].length);
        continue;
      }

      // CSS properties
      const cssMatch = remaining.match(/^([\w-]+):/);
      if (cssMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-sky-300">
            {cssMatch[1]}
          </span>
        );
        tokens.push(
          <span key={tokenIndex++} className="text-slate-400">
            :
          </span>
        );
        remaining = remaining.slice(cssMatch[0].length);
        continue;
      }

      // CSS values (after colon, before semicolon)
      const valueMatch = remaining.match(/^([^;{}<>]+)(;)/);
      if (valueMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-amber-200">
            {valueMatch[1]}
          </span>
        );
        tokens.push(
          <span key={tokenIndex++} className="text-slate-400">
            ;
          </span>
        );
        remaining = remaining.slice(valueMatch[0].length);
        continue;
      }

      // Braces
      const braceMatch = remaining.match(/^([{}])/);
      if (braceMatch) {
        tokens.push(
          <span key={tokenIndex++} className="text-slate-400">
            {braceMatch[1]}
          </span>
        );
        remaining = remaining.slice(1);
        continue;
      }

      // Default: take one character
      tokens.push(
        <span key={tokenIndex++} className="text-slate-300">
          {remaining[0]}
        </span>
      );
      remaining = remaining.slice(1);
    }

    return (
      <div key={lineIndex} className="leading-relaxed">
        {tokens.length > 0 ? tokens : "\u00A0"}
      </div>
    );
  });
};

// Blinking cursor component
const Cursor: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame % 30, [0, 15, 30], [1, 0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span style={{ opacity }} className="text-sky-400">
      ▌
    </span>
  );
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  title = "index.html",
  typewriter = false,
  charFrames = 2,
  startFrame = 0,
  highlightLines = [],
}) => {
  const frame = useCurrentFrame();
  useVideoConfig(); // Required for Remotion context

  // Calculate displayed code based on typewriter effect
  let displayedCode = code;
  if (typewriter) {
    const elapsed = Math.max(0, frame - startFrame);
    const charCount = Math.floor(elapsed / charFrames);
    displayedCode = code.slice(0, charCount);
  }

  const lines = displayedCode.split("\n");
  const isTyping = typewriter && displayedCode.length < code.length;

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden border border-slate-700">
      {/* Editor header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 text-sm ml-2">{title}</span>
      </div>

      {/* Code content */}
      <div className="flex-1 bg-slate-900 p-4 overflow-hidden">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, i) => {
            const lineNum = i + 1;
            const isHighlighted = highlightLines.includes(lineNum);

            return (
              <div
                key={i}
                className={`flex ${isHighlighted ? "bg-sky-900/30 -mx-4 px-4" : ""}`}
              >
                <span className="text-slate-600 select-none w-8 text-right mr-4">
                  {lineNum}
                </span>
                <span className="flex-1">
                  {highlightCode(line)}
                  {isTyping && i === lines.length - 1 && (
                    <Cursor frame={frame} />
                  )}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};
