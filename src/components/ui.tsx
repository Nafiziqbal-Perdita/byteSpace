import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { heroAssets, footerAssets } from '../data/assets'

export function Button({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button inline-flex shrink-0 items-center justify-center rounded-[24px] bg-lime text-ink p-[12px_24px] text-[18px] font-medium leading-[1.2] text-center [&:hover]:bg-[#c6eb10] [&:active]:bg-[#b6d908] ${className}`} {...props} />
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="ByteSpace home"
      className={`logo inline-flex items-start gap-[8.125px] w-[171px] h-[37px] shrink-0 [&_img]:shrink-0 [&_span]:mt-[7px] [&_span]:font-logo [&_span]:text-[24px] [&_span]:font-bold [&_span]:leading-[30px] [&_span]:whitespace-nowrap ${light ? 'text-cloud' : 'text-ink'}`}
    >
      <img src={light ? heroAssets.imgVector : footerAssets.imgVector} alt="" />
      <span>ByteSpace</span>
    </a>
  )
}

export function SectionHeading({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <h2
      id={id}
      className={`font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] md:text-[44px] ${className}`}
    >
      {children}
    </h2>
  )
}

export function AvatarStack({
  images,
  badge,
  count,
  large = false,
}: {
  images: string[]
  badge: string
  count: string
  large?: boolean
}) {
  return (
    <div
      className={`flex items-start w-max [&_>_img]:shrink-0 [&_>_img]:mr-[-8px] ${large ? '[&_>_img]:mr-[-16px] [&_.avatar-count_>_span]:font-bold [&_.avatar-count_>_span]:pl-1 [&_.avatar-count_>_span]:pt-[1px]' : ''}`}
      aria-label={`${count} learners`}
    >
      {images.map((src) => (
        <img
          key={src}
          src={src}
          width={large ? 43 : 32}
          height={large ? 43 : 32}
          alt=""
          loading="lazy"
        />
      ))}
      <span className="avatar-count relative inline-grid shrink-0 place-items-center [&_>_img]:[grid-area:1_/_1] [&_>_img]:max-w-none [&_>_span]:[grid-area:1_/_1] [&_>_span]:z-[1] [&_>_span]:text-[12px] [&_>_span]:font-medium [&_>_span]:leading-[1.2]">
        <img src={badge} alt="" />
        <span>{count}</span>
      </span>
    </div>
  )
}

export function ProgressPanel({
  className = '',
  feature = false,
}: {
  className?: string
  feature?: boolean
}) {
  return (
    <div
      className={`w-58 rounded-2xl bg-white p-4 text-ink backdrop-blur-[10px] ${className}`}
    >
      <p
        className={`text-sm font-medium ${feature ? 'leading-6' : 'leading-[1.2]'}`}
      >
        Learning Progress
      </p>
      <p className="mt-2 font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em]">
        55%
      </p>
      <div
        className="mt-2 h-2 w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full w-[112px] rounded-3xl bg-lime" />
      </div>
    </div>
  )
}

export function StudentsPanel({
  className = '',
  images,
  badge,
  star,
  feature = false,
}: {
  className?: string
  images: string[]
  badge: string
  star: string
  feature?: boolean
}) {
  return (
    <div
      className={`w-[258px] rounded-2xl bg-white p-4 text-ink backdrop-blur-[10px] ${className}`}
    >
      <p
        className={`text-base font-medium ${feature ? 'leading-6' : 'leading-[1.2]'}`}
      >
        Happy Students
      </p>
      <div
        className={`flex items-center ${feature ? 'text-[10px] leading-[15px]' : 'text-xs leading-[19.2px]'}`}
      >
        <span>
          4.5 <span className="text-muted">(240)</span>
        </span>
        <span className="flex size-4 items-center justify-center">
          <img src={star} alt="stars" />
        </span>
      </div>
      <div className="mt-2">
        <AvatarStack images={images} badge={badge} count="2K+" large />
      </div>
    </div>
  )
}
