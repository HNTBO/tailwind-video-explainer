import { AbsoluteFill } from "remotion";
import type { ReactNode } from "react";

interface SplitScreenProps {
  left: ReactNode;
  right: ReactNode;
  /** Ratio of left panel width (0-1), default 0.5 */
  ratio?: number;
  /** Gap between panels in pixels */
  gap?: number;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  ratio = 0.5,
  gap = 16,
}) => {
  const leftWidth = `calc(${ratio * 100}% - ${gap / 2}px)`;
  const rightWidth = `calc(${(1 - ratio) * 100}% - ${gap / 2}px)`;

  return (
    <AbsoluteFill className="flex flex-row bg-slate-950 p-6">
      <div
        style={{ width: leftWidth }}
        className="flex flex-col overflow-hidden"
      >
        {left}
      </div>
      <div style={{ width: gap }} />
      <div
        style={{ width: rightWidth }}
        className="flex flex-col overflow-hidden"
      >
        {right}
      </div>
    </AbsoluteFill>
  );
};
