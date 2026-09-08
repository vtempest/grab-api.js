'use client';

/**
 * @file loading-animations-demo.tsx
 * @description Live gallery for every loading icon shipped by the repo — the eight
 * `<Spinner>` React variants from `@/components/ui/spinner` and all 25 SVG-string
 * animations from the `loading-animations` package. Size and color are wired to
 * controls so the page doubles as a picker: whatever you dial in is the exact code
 * shown under each animation.
 */

import { useId, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import * as loadingSvgs from 'loading-animations/svg/src';
import { SPINNER_VARIANTS, Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

/** `colors` accepts one hex per color in the source SVG; monochrome icons need just one. */
type LoadingSvg = (options: {
  colors?: string[];
  size?: number;
  raw?: boolean;
}) => string;

/**
 * The eight monochrome SVGs that mirror the React `<Spinner>` variants one-for-one.
 * Listed separately so the gallery can call them out from the older multi-color set.
 */
const MONOCHROME_EXPORTS = [
  'loadingSpokes',
  'loadingCircleNotch',
  'loadingPinwheel',
  'loadingCircleTrack',
  'loadingDotsBounce',
  'loadingPulseRing',
  'loadingEqualizerBars',
  'loadingInfiniteDash',
] as const;

const SVG_ENTRIES = Object.entries(loadingSvgs as Record<string, LoadingSvg>)
  .filter(([name]) => name.startsWith('loading'))
  .sort(([a], [b]) => {
    const aNew = (MONOCHROME_EXPORTS as readonly string[]).includes(a);
    const bNew = (MONOCHROME_EXPORTS as readonly string[]).includes(b);
    if (aNew !== bNew) return aNew ? -1 : 1;
    return a.localeCompare(b);
  });

const TEXT_COLORS = [
  { label: 'Current', className: '', swatch: 'currentColor' },
  { label: 'Primary', className: 'text-fd-primary', swatch: 'var(--color-fd-primary)' },
  { label: 'Muted', className: 'text-fd-muted-foreground', swatch: 'var(--color-fd-muted-foreground)' },
  { label: 'Emerald', className: 'text-emerald-500', swatch: '#10b981' },
  { label: 'Rose', className: 'text-rose-500', swatch: '#f43f5e' },
] as const;

/** Click-to-copy label used under every animation in the gallery. */
function CopyableCode({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      title={code}
      aria-label={`Copy code for ${label}`}
      onClick={() => {
        void navigator.clipboard.writeText(code).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        });
      }}
      className="group flex max-w-full items-center justify-center gap-1.5 rounded px-1.5 py-0.5 text-center font-mono text-xs leading-tight text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground"
    >
      <span className="break-all">{label}</span>
      {copied ? (
        <Check className="size-3 shrink-0 text-emerald-500" />
      ) : (
        <Copy className="size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </button>
  );
}

function Cell({
  children,
  code,
  label,
  badge,
}: {
  children: React.ReactNode;
  code: string;
  label: string;
  badge?: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-between gap-3 rounded-lg border border-fd-border bg-fd-card p-4">
      {badge ? (
        <span className="absolute top-1.5 right-1.5 rounded-full bg-fd-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-fd-primary">
          {badge}
        </span>
      ) : null}
      <div className="flex min-h-[88px] w-full items-center justify-center">
        {children}
      </div>
      <CopyableCode code={code} label={label} />
    </div>
  );
}

function SizeControl({
  value,
  onChange,
  min = 16,
  max = 96,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-center gap-2 text-sm text-fd-muted-foreground">
      Size
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={4}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-1 w-32 cursor-pointer accent-fd-primary"
      />
      <span className="w-10 font-mono text-xs tabular-nums">{value}px</span>
    </label>
  );
}

/** The eight `<Spinner variant>` values, colored with Tailwind text utilities. */
export function SpinnerVariants() {
  const [size, setSize] = useState(32);
  const [colorIndex, setColorIndex] = useState(0);
  const color = TEXT_COLORS[colorIndex] ?? TEXT_COLORS[0];

  return (
    <div className="not-prose my-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <SizeControl value={size} onChange={setSize} />
        <div className="flex items-center gap-2 text-sm text-fd-muted-foreground">
          Color
          <div className="flex items-center gap-1">
            {TEXT_COLORS.map((option, index) => (
              <button
                key={option.label}
                type="button"
                title={option.className || 'inherit'}
                aria-label={option.label}
                aria-pressed={index === colorIndex}
                onClick={() => setColorIndex(index)}
                className={cn(
                  'size-5 rounded-full border-2 transition-transform',
                  index === colorIndex
                    ? 'border-fd-foreground scale-110'
                    : 'border-transparent hover:scale-110',
                )}
                style={{ backgroundColor: option.swatch }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SPINNER_VARIANTS.map((variant) => (
          <Cell
            key={variant}
            label={variant}
            code={`<Spinner variant="${variant}"${size === 24 ? '' : ` size={${size}}`}${
              color.className ? ` className="${color.className}"` : ''
            } />`}
          >
            <Spinner
              variant={variant}
              size={size}
              className={color.className || undefined}
            />
          </Cell>
        ))}
      </div>
    </div>
  );
}

/** Every SVG-string animation exported by `loading-animations/svg`. */
export function LoadingSvgGallery() {
  const [size, setSize] = useState(64);
  const [color, setColor] = useState('#71717a');
  const [recolor, setRecolor] = useState(false);
  const colorId = useId();
  const recolorId = useId();

  return (
    <div className="not-prose my-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <SizeControl value={size} onChange={setSize} min={24} max={128} />
        <label htmlFor={recolorId} className="flex items-center gap-2 text-sm text-fd-muted-foreground">
          <input
            id={recolorId}
            type="checkbox"
            checked={recolor}
            onChange={(event) => setRecolor(event.target.checked)}
            className="size-3.5 accent-fd-primary"
          />
          Override colors
        </label>
        <label
          htmlFor={colorId}
          className={cn(
            'flex items-center gap-2 text-sm text-fd-muted-foreground',
            !recolor && 'pointer-events-none opacity-40',
          )}
        >
          <input
            id={colorId}
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className="size-6 cursor-pointer rounded border-0 bg-transparent p-0"
          />
          <span className="font-mono text-xs uppercase">{color}</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {SVG_ENTRIES.map(([name, render]) => {
          const options = recolor
            ? { size, colors: [color], raw: true }
            : { size, raw: true };
          const isMonochrome = (MONOCHROME_EXPORTS as readonly string[]).includes(name);

          return (
            <Cell
              key={name}
              label={name}
              badge={isMonochrome ? 'new' : undefined}
              code={`${name}({ size: ${size}${recolor ? `, colors: ['${color}']` : ''} })`}
            >
              {/* `raw: true` returns the SVG markup itself (rather than an <img> data URI) so it
                  inlines into the page. The markup comes from this repo's own package, never user input. */}
              <div
                className="flex items-center justify-center"
                style={{ width: size, height: size }}
                dangerouslySetInnerHTML={{ __html: render(options) }}
              />
            </Cell>
          );
        })}
      </div>
    </div>
  );
}

/** Convenience wrapper rendering both galleries back to back. */
export function LoadingAnimationsDemo() {
  return (
    <>
      <SpinnerVariants />
      <LoadingSvgGallery />
    </>
  );
}
