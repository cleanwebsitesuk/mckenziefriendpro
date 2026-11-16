import { scriptWords, type ScriptWord } from "./scriptWords";

/**
 * Speech bubbles in four scripts: English, Urdu, Hindi and Punjabi.
 * The Urdu, Hindi and Punjabi words are outlines (see scriptWords.ts), so
 * they render correctly everywhere without extra font downloads.
 * Drawn for navy backgrounds.
 */

type Bubble = {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  ink: string;
  tail: "start" | "end";
  stroke?: string;
};

/** A rounded bubble with a small tail at the bottom-left ("start") or bottom-right ("end"). */
function BubbleShape({ x, y, w, h, fill, tail, stroke }: Bubble) {
  const tx = tail === "start" ? x + 34 : x + w - 34;
  const dir = tail === "start" ? -1 : 1;
  const tailPath = `M${tx - 14 * dir} ${y + h - 6} L${tx + 16 * dir} ${y + h + 22} L${tx + 22 * dir} ${y + h - 6} Z`;
  return (
    <g fill={fill} stroke={stroke ?? fill} strokeWidth="4" strokeLinejoin="round">
      <path d={tailPath} />
      <rect x={x} y={y} width={w} height={h} rx={Math.min(30, h / 2)} />
      {stroke ? <path d={tailPath} stroke="none" transform={`translate(0 -3)`} /> : null}
    </g>
  );
}

/** Fits a shaped word inside its bubble, centred, with padding. */
function Word({ word, bubble, padX = 30, padY = 20 }: { word: ScriptWord; bubble: Bubble; padX?: number; padY?: number }) {
  const [bx, by, bw, bh] = word.bbox;
  const scale = Math.min((bubble.w - padX * 2) / bw, (bubble.h - padY * 2) / bh);
  const dx = bubble.x + (bubble.w - bw * scale) / 2;
  const dy = bubble.y + (bubble.h - bh * scale) / 2;
  return (
    <path
      d={word.d}
      fill={bubble.ink}
      transform={`translate(${dx.toFixed(2)} ${dy.toFixed(2)}) scale(${scale.toFixed(4)}) translate(${-bx} ${-by})`}
    />
  );
}

const english: Bubble = { x: 8, y: 8, w: 206, h: 84, fill: "#FFFFFF", ink: "#0B1221", tail: "start" };
const urdu: Bubble = { x: 226, y: 70, w: 186, h: 112, fill: "#87CDD0", ink: "#0B1221", tail: "end" };
const hindi: Bubble = { x: 30, y: 148, w: 176, h: 96, fill: "#69C1EA", ink: "#0B1221", tail: "start" };
const punjabi: Bubble = { x: 190, y: 238, w: 222, h: 88, fill: "#14213D", ink: "#FFFFFF", tail: "end", stroke: "#87CDD0" };

export function SpeechBubbles({ className, label }: { className?: string; label: string }) {
  return (
    <svg className={className} viewBox="0 0 420 356" role="img" aria-label={label} focusable="false">
      <BubbleShape {...english} />
      <text
        x={english.x + english.w / 2}
        y={english.y + english.h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="bubble-text"
        fill={english.ink}
      >
        English
      </text>

      <BubbleShape {...urdu} />
      <Word word={scriptWords.urdu} bubble={urdu} padX={44} padY={22} />

      <BubbleShape {...hindi} />
      <Word word={scriptWords.hindi} bubble={hindi} padX={40} padY={22} />

      <BubbleShape {...punjabi} />
      <Word word={scriptWords.punjabi} bubble={punjabi} padX={40} padY={24} />
    </svg>
  );
}
