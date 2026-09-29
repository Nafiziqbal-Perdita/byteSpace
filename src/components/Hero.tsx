import { useState, type FormEvent } from 'react'
import { heroAssets as a, partnersAssets } from '../data/assets'
import { Header, type AccountAction } from './Header'
import { Button, ProgressPanel, StudentsPanel } from './ui'
import { Ornaments } from './Ornaments'
import { Artboard } from './Artboard'

export function Hero({
  onSearch,
  onAction,
}: {
  onSearch: (query: string) => void
  onAction: (action: AccountAction) => void
}) {
  const [query, setQuery] = useState('')
  function submit(event: FormEvent) {
    event.preventDefault()
    onSearch(query)
  }
  return (
    <section
      id="home"
      className="h-256 [&_h1]:text-[72px] [&_h1]:leading-[1.2] max-[1280px]:[&_h1]:text-[64px]! max-[1280px]:[&_h1]:max-w-215! max-[1280px]:h-[990px]! max-[1280px]:[&_.ornaments]:opacity-[0.85]! max-[1024px]:[&_h1]:text-[56px]! max-[1024px]:[&_h1]:max-w-190! max-[1024px]:h-auto! max-[1024px]:[&_.ornaments]:hidden! max-[768px]:[&_h1]:max-w-135! max-[768px]:[&_h1]:text-[42px]! max-[400px]:[&_h1]:text-[36px]! relative isolate overflow-hidden bg-blue text-white"
      aria-labelledby="hero-title"
    >
      <div
        className="w-[1442px] h-[1026px] left-[calc(50%_-_720px)] top-[-2px] [&_img]:max-w-none pointer-events-none absolute"
        aria-hidden="true"
      >
        <img src={a.imgGroup4} alt="" />
      </div>
      <Header onAction={onAction} />
      <div className="pt-[49px] max-[1024px]:pt-10! max-[768px]:pt-8! page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]! relative z-10 flex flex-col items-center text-center">
        <h1
          id="hero-title"
          className="max-w-[935px] font-heading font-semibold tracking-[-0.01em]"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-8 max-[1280px]:max-w-190! max-[1024px]:max-w-170! max-[768px]:mt-6! max-[768px]:text-[16px]! max-[768px]:max-w-125! text-lg leading-[1.6] text-[#e5e6e8]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          role="search"
          className="w-[581px] max-w-full mt-15 [&_label:focus-within]:[outline:3px_solid_var(--color-lime)] [&_label:focus-within]:outline-offset-[4px] max-[768px]:mt-8! max-[768px]:gap-[10px]! max-[768px]:[&_label]:px-4! max-[768px]:[&_input]:text-[16px]! max-[768px]:[&_.button]:px-5! max-[400px]:flex-wrap! max-[400px]:justify-center! max-[400px]:[&_label]:[flex-basis:100%]! max-[400px]:[&_.button]:mt-1! flex items-start gap-4"
          onSubmit={submit}
        >
          <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 text-ink">
            <img src={a.imgStyleOutlined} alt="" />
            <span className="sr-only">Search courses, topics, or creators</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent text-lg leading-[1.6] outline-none placeholder:text-muted"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>
      <div className="absolute z-[1] w-225 max-w-full bottom-0 left-[50%] [transform:translateX(-50%)] max-[1024px]:relative! max-[1024px]:left-auto! max-[1024px]:[transform:none]! max-[1024px]:m-[24px_auto_0]! max-[768px]:max-w-full! max-[768px]:w-full! max-[768px]:mx-auto! max-[768px]:mt-7!">
        <Artboard width={900} height={512} className="hero-art">
          <img className="absolute left-[-125.5px] top-[70px] max-w-none" src={a.imgEllipse7} alt="" />
          <img
            className="absolute top-0 left-[161px] w-[578px] h-[541px] object-cover [filter:url(#portrait-shadow)]"
            src={a.imgImage}
            width="578"
            height="541"
            alt="A smiling learner holding a laptop"
            fetchPriority="high"
          />
          <div className="top-[127px] left-[134px] absolute w-[208px] rounded-2xl bg-white p-4 text-ink backdrop-blur-[10px]">
            <p className="text-base font-medium leading-[1.2]">UI/UX Design</p>
            <p className="flex gap-2 text-xs leading-[1.6] text-muted">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </p>
          </div>
          <ProgressPanel className="top-[139px] left-143 absolute" />
          <StudentsPanel
            className="top-[325px] left-[58px] absolute"
            images={[
              a.imgEllipse,
              a.imgEllipse1,
              a.imgEllipse2,
              a.imgEllipse3,
              a.imgEllipse4,
              a.imgEllipse5,
              a.imgEllipse6,
            ]}
            badge={a.imgEllipse8}
            star={a.imgStar}
          />
        </Artboard>
      </div>
      <Ornaments variant="hero" />
    </section>
  )
}

export function PartnerLogos() {
  return (
    <section
      className="py-[80px] [&_img]:shrink-0 max-[1280px]:[&_.page-container]:gap-x-10! max-[1024px]:py-[56px]! max-[768px]:py-[40px]! max-[768px]:[&_.page-container]:gap-[28px_32px]! max-[768px]:[&_img]:[zoom:0.8]! bg-cloud"
      aria-label="Our learning partners"
    >
      <div className="page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]! flex flex-wrap items-center justify-center gap-x-[72px] gap-y-8">
        {Object.values(partnersAssets).map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Logoipsum partner ${i + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
