/**
 * Corner registration ticks — the four small crosshair marks that sit on the
 * outline of each panel in the reference layout.
 */
export function CornerTicks({ color }: { color: string }) {
  const base = 'pointer-events-none absolute h-2.5 w-2.5';
  const line = 'absolute bg-current';
  return (
    <>
      {[
        { pos: 'left-[-1.5px] top-[-1.5px]', v: 'left-0 top-1/2 -translate-y-1/2 h-[9px] w-px', h: 'top-0 left-1/2 -translate-x-1/2 w-[9px] h-px' },
        { pos: 'right-[-1.5px] top-[-1.5px]', v: 'right-0 top-1/2 -translate-y-1/2 h-[9px] w-px', h: 'top-0 left-1/2 -translate-x-1/2 w-[9px] h-px' },
        { pos: 'left-[-1.5px] bottom-[-1.5px]', v: 'left-0 top-1/2 -translate-y-1/2 h-[9px] w-px', h: 'bottom-0 left-1/2 -translate-x-1/2 w-[9px] h-px' },
        { pos: 'right-[-1.5px] bottom-[-1.5px]', v: 'right-0 top-1/2 -translate-y-1/2 h-[9px] w-px', h: 'bottom-0 left-1/2 -translate-x-1/2 w-[9px] h-px' },
      ].map((t, i) => (
        <span key={i} className={base + ' ' + t.pos} style={{ color }}>
          <span className={line + ' ' + t.v} />
          <span className={line + ' ' + t.h} />
        </span>
      ))}
    </>
  );
}
