import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import type { ReactNode, CSSProperties } from "react";

interface VisualPreviewProps {
  /** Content to display in the preview */
  children: ReactNode;
  /** Title shown in the preview header */
  title?: string;
  /** Background color of the preview area */
  backgroundColor?: string;
  /** Animate entrance with fade/scale */
  animateEntrance?: boolean;
  /** Frame to start entrance animation */
  entranceFrame?: number;
}

export const VisualPreview: React.FC<VisualPreviewProps> = ({
  children,
  title = "Preview",
  backgroundColor = "#ffffff",
  animateEntrance = false,
  entranceFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let contentStyle: CSSProperties = {};

  if (animateEntrance) {
    const progress = spring({
      frame: frame - entranceFrame,
      fps,
      config: { damping: 200 },
    });

    const opacity = interpolate(progress, [0, 1], [0, 1]);
    const scale = interpolate(progress, [0, 1], [0.95, 1]);

    contentStyle = {
      opacity,
      transform: `scale(${scale})`,
    };
  }

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden border border-slate-700">
      {/* Preview header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="w-2 h-2 rounded-full bg-sky-500" />
        <span className="text-slate-400 text-sm">{title}</span>
      </div>

      {/* Preview content */}
      <div
        className="flex-1 flex items-center justify-center p-6 overflow-hidden"
        style={{ backgroundColor }}
      >
        <div style={contentStyle} className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

// Reusable preview elements for common demonstrations

interface BoxProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export const PreviewBox: React.FC<BoxProps> = ({
  className = "",
  children,
  style,
}) => {
  return (
    <div
      className={`bg-sky-500 text-white font-medium rounded ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

interface TextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const PreviewText: React.FC<TextProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <p className={`text-slate-800 ${className}`} style={style}>
      {children}
    </p>
  );
};

// Animated highlight box that can show padding/margin
interface BoxModelProps {
  content?: ReactNode;
  padding?: number;
  margin?: number;
  showLabels?: boolean;
  animateFrame?: number;
}

export const BoxModelDemo: React.FC<BoxModelProps> = ({
  content = "Content",
  padding = 16,
  margin = 16,
  showLabels = true,
  animateFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let animatedPadding = padding;
  let animatedMargin = margin;

  if (animateFrame !== undefined) {
    const progress = spring({
      frame: frame - animateFrame,
      fps,
      config: { damping: 200 },
    });

    animatedPadding = interpolate(progress, [0, 1], [0, padding]);
    animatedMargin = interpolate(progress, [0, 1], [0, margin]);
  }

  return (
    <div className="relative">
      {/* Margin layer */}
      <div
        className="bg-amber-200/50 relative"
        style={{ padding: animatedMargin }}
      >
        {showLabels && (
          <span className="absolute top-1 left-1 text-xs text-amber-700 font-mono">
            margin
          </span>
        )}

        {/* Padding layer */}
        <div
          className="bg-emerald-200/50 relative"
          style={{ padding: animatedPadding }}
        >
          {showLabels && (
            <span className="absolute top-1 left-1 text-xs text-emerald-700 font-mono">
              padding
            </span>
          )}

          {/* Content */}
          <div className="bg-sky-500 text-white px-4 py-2 text-center font-medium">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
