import { Artboard } from '../Artboard'
import { CourseCard } from '../CourseCard'
import { Ornament } from '../Ornaments'
import { StudentsPanel } from '../ui'

const asset = (name: string) => `/assets/login/${name}`

export function LoginIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none">
      <Artboard width={548} height={585} className="xl:ml-[-25px]">
        {[
          { title: 'Build Digital Asset', image: 'imgFrame2.png', position: 'left-[25px] top-[89px]' },
          { title: 'the Power of Big Data', image: 'imgFrame3.png', position: 'left-[136px] top-0' },
        ].map(({ title, image, position }) => (
          <div key={title} className={`absolute ${position} [&_.course-image-labels]:leading-5 [&_.course-body>div>p]:leading-5 [&_.course-body>div:nth-child(2)>span]:leading-5`}>
            <CourseCard decorative course={{ id: image, title, image: asset(image), categories: [] }} />
          </div>
        ))}
        <StudentsPanel feature className="absolute left-[251px] top-[435px] bg-lime! [&>div:first-of-type]:h-4 [&_.avatar-count>span]:text-cloud" images={Array.from({ length: 7 }, (_, index) => asset(`imgEllipse${index + 5}.png`))} badge={asset('imgEllipse12.svg')} star={asset('imgStar.svg')} />
        <Ornament image={asset('imgImage.png')} mask={asset('imgRectangle.png')} color="#f5f5f6" x={373} y={321} size={175} flip />
        <Ornament image={asset('imgCone012.png')} mask={asset('imgRectangle15.png')} color="#d4fb20" x={54} y={15} size={146} cone />
        <Ornament image={asset('imgCone13.png')} mask={asset('imgRectangle16.png')} color="#d4fb20" x={0} y={397} size={188} cone />
      </Artboard>
    </div>
  )
}
