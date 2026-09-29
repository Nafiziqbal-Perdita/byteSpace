import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/** Scale only the layered illustrations. Page content remains fluid, accessible HTML. */
export function Artboard({
  width,
  height,
  children,
  className = '',
}: {
  width: number
  height: number
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const update = () => setScale(element.getBoundingClientRect().width / width)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [width])
  return (
    <div
      ref={ref}
      className={`relative w-full max-w-[var(--artboard-width)] aspect-[var(--artboard-ratio)] max-[1024px]:mx-auto! ${className}`}
      style={{
        '--artboard-width': `${width}px`,
        '--artboard-height': `${height}px`,
        '--artboard-ratio': `${width} / ${height}`,
        '--artboard-scale': scale,
      } as CSSProperties}
    >
      <div
        className="absolute left-0 top-0 origin-top-left w-[var(--artboard-width)] h-[var(--artboard-height)] [transform:scale(var(--artboard-scale))]"
      >
        {children}
      </div>
    </div>
  )
}
