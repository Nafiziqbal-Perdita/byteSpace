// Figma's eight shadows share the original alpha, rather than blurring each other.
// An SVG filter preserves those independent layers without cascading CSS filters.
export function PortraitShadow() {
  const layers = [
    [0.518, 0.741, 3.036, 0.04],
    [2.233, 3.19, 5.723, 0.06],
    [5.383, 7.69, 9.571, 0.07],
    [10.208, 14.582, 16.087, 0.08],
    [16.946, 24.209, 24, 0.09],
    [25.838, 36.912, 36, 0.1],
    [37.122, 53.032, 56, 0.11],
    [51.038, 72.912, 72, 0.13],
  ]
  return (
    <svg
      width="0"
      height="0"
      className="absolute pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="[filter:url(#portrait-shadow)]"
          x="-30%"
          y="-30%"
          width="180%"
          height="190%"
          colorInterpolationFilters="sRGB"
        >
          {layers.map(([x, y, blur, opacity], i) => [
            <feGaussianBlur
              key={`blur-${i}`}
              in="SourceAlpha"
              stdDeviation={blur / 2}
              result={`blur${i}`}
            />,
            <feOffset
              key={`offset-${i}`}
              in={`blur${i}`}
              dx={x}
              dy={y}
              result={`offset${i}`}
            />,
            <feFlood
              key={`color-${i}`}
              floodColor="black"
              floodOpacity={opacity}
              result={`color${i}`}
            />,
            <feComposite
              key={`shadow-${i}`}
              in={`color${i}`}
              in2={`offset${i}`}
              operator="in"
              result={`shadow${i}`}
            />,
          ])}
          <feMerge>
            {layers.map((_, i) => (
              <feMergeNode key={i} in={`shadow${i}`} />
            ))}
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
