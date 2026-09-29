import { ctaAssets } from '../data/assets'
import { Ornaments } from './Ornaments'
import { Button, SectionHeading } from './ui'

export function CreatorCTA({ onJoin }: { onJoin: () => void }) {
  return (
    <section
      className="[padding-block:85px_84px] min-h-122 max-[1024px]:py-[72px]! max-[1024px]:[&_.ornaments]:opacity-[0.3]! max-[768px]:py-[64px]! max-[768px]:[&_.ornaments]:hidden! relative isolate overflow-hidden bg-blue text-cloud"
      aria-labelledby="cta-title"
    >
      <div className="w-[1442px] h-[1026px] left-[calc(50%_-_720px)] top-[-2px] [&_img]:max-w-none pointer-events-none absolute" aria-hidden="true">
        <img src={ctaAssets.imgGroup4} alt="" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1012px] flex-col items-center gap-10 px-6 text-center">
        <SectionHeading id="cta-title" className="max-w-[710px]">
          Unlock Your Potential as a Creator with ByteSpace
        </SectionHeading>
        <p className="text-lg leading-[1.6]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button onClick={onJoin}>Join as Creator</Button>
      </div>
      <Ornaments variant="cta" />
    </section>
  )
}
