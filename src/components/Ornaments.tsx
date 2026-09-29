import type { CSSProperties } from 'react'
import { heroAssets as hero, ctaAssets as cta } from '../data/assets'

type OrnamentProps = {
  image: string
  mask: string
  color: string
  x: number
  y: number
  size: number
  flip?: boolean
  cone?: boolean
}

/** Original Figma image plus its supplied alpha mask and hard-light color layer. */
export function Ornament({
  image,
  mask,
  color,
  x,
  y,
  size,
  flip,
  cone,
}: OrnamentProps) {
  const style = {
    '--ornament-x': `${x}px`,
    '--ornament-y': `${y}px`,
    '--ornament-size': `${size}px`,
    '--ornament-color': color,
    '--ornament-mask': `url(${mask})`,
  } as CSSProperties
  return (
    <div className={`absolute isolate left-[var(--ornament-x)] top-[var(--ornament-y)] size-[var(--ornament-size)] [&_img]:absolute [&_img]:w-full [&_img]:h-full [&_img]:object-cover ${flip ? '-scale-x-100' : ''}`} style={style} aria-hidden="true">
      <div className={cone ? 'absolute [inset:-0.22%_0.56%_-0.28%_-1.05%]' : 'absolute [inset:0_0.47%_-0.47%_-0.93%]'}>
        <img src={image} alt="" />
        <div
          className="absolute inset-0 mix-blend-hard-light bg-[var(--ornament-color)] [mask-image:var(--ornament-mask)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-mode:alpha]"
        />
      </div>
    </div>
  )
}

export function Ornaments({ variant }: { variant: "hero" | 'cta' }) {
  const isHero = variant === "hero"
  const a = isHero ? hero : cta
  return (
    <div className={`ornaments absolute z-[2] w-360 h-full left-[calc(50%_-_720px)] top-0 pointer-events-none ornaments-${variant}`} aria-hidden="true">
      <Ornament
        image={isHero ? hero.imgImage1 : cta.imgImage}
        mask={a.imgRectangle}
        color={isHero ? '#f5f5f6' : '#d4fb20'}
        x={isHero ? 1127 : 1110}
        y={isHero ? 672 : 289}
        size={330}
      />
      <Ornament
        image={isHero ? hero.imgImage2 : cta.imgImage1}
        mask={a.imgRectangle1}
        color="#d4fb20"
        x={-118}
        y={isHero ? 221 : -162}
        size={385}
      />
      <Ornament
        image={isHero ? hero.imgImage2 : cta.imgImage1}
        mask={a.imgRectangle2}
        color="#f5f5f6"
        x={isHero ? 183 : 178}
        y={isHero ? 477 : 5}
        size={175}
        flip
      />
      <Ornament
        image={isHero ? hero.imgCone012 : cta.imgCone14}
        mask={isHero ? hero.imgRectangle15 : cta.imgRectangle17}
        color={isHero ? '#f5f5f6' : '#d4fb20'}
        x={isHero ? 18 : 20}
        y={isHero ? 682 : 299}
        size={342}
        cone
      />
      <Ornament
        image={isHero ? hero.imgCone13 : cta.imgCone15}
        mask={isHero ? hero.imgRectangle16 : cta.imgRectangle18}
        color={isHero ? '#d4fb20' : '#f5f5f6'}
        x={isHero ? 1231 : 1226}
        y={isHero ? 221 : 6}
        size={370}
        cone
      />
      <Ornament
        image={isHero ? hero.imgCone14 : cta.imgCone012}
        mask={isHero ? hero.imgRectangle17 : cta.imgRectangle15}
        color={isHero ? '#f5f5f6' : '#d4fb20'}
        x={isHero ? 1106 : 1080}
        y={isHero ? 464 : 0}
        size={188}
        cone
      />
      {!isHero && (
        <Ornament
          image={cta.imgCone13}
          mask={cta.imgRectangle16}
          color="#f5f5f6"
          x={-48}
          y={225}
          size={188}
          cone
        />
      )}
    </div>
  )
}
