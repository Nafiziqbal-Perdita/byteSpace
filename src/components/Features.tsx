import { featuresAssets as a } from '../data/assets'
import { courses } from '../data/courses'
import { Artboard } from './Artboard'
import { CourseCard } from './CourseCard'
import { Ornament } from './Ornaments'
import { ProgressPanel, SectionHeading, StudentsPanel } from './ui'

export function LearnerFeatures() {
  return (
    <section
      className="grid-cols-[574px_621px] gap-[63px] grid items-center max-[1280px]:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]! max-[1280px]:gap-10! max-[1024px]:grid-cols-[1fr]! max-[1024px]:gap-12!"
      aria-labelledby="learner-title"
    >
      <div className="feature-copy max-[1280px]:gap-7! max-[1280px]:[&_h2]:text-[36px]! max-[1024px]:max-w-[621px]! max-[1024px]:mx-auto! max-[1024px]:w-full! max-[1024px]:[&_p]:max-w-none! max-[1024px]:[&_h2]:max-w-145! max-[768px]:[&_h2]:text-[32px]! flex flex-col gap-10">
        <SectionHeading id="learner-title">
          Your Path to Professional Growth Starts Here!
        </SectionHeading>
        <p className="max-w-[477px] text-lg leading-[1.6] text-slate">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <dl className="flex gap-10 sm:gap-14">
          {[
            ['12K', 'Students'],
            ['70+', 'Courses'],
            ['16', 'Creators'],
          ].map(([number, label]) => (
            <div key={label}>
              <dt className="font-heading text-4xl leading-[44px] font-medium tracking-[-0.01em] text-blue">
                {number}
              </dt>
              <dd className="text-lg leading-[1.6] text-slate">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Artboard width={621} height={552} className="learner-art">
        <div className="absolute left-0 top-0 w-[373px]" aria-hidden="true">
          <CourseCard course={courses[0]} decorative />
        </div>
        <img
          src={a.imgImage}
          alt="A learner developing professional skills"
          loading="lazy"
          width="577"
          height="540"
          className="[filter:url(#portrait-shadow)] absolute left-0 top-3 h-[540px] w-[577px] object-cover"
        />
        <ProgressPanel className="absolute left-[345px] top-[213px]" feature />
        <Ornament
          image={a.imgImage1}
          mask={a.imgRectangle}
          color="#d4fb20"
          x={406}
          y={67}
          size={215}
        />
      </Artboard>
    </section>
  )
}

export function CreatorFeatures() {
  return (
    <section
      id="creators"
      className="grid-cols-[541px_580px] gap-[79px] max-[1024px]:[&_.feature-copy]:row-[1]! grid items-center max-[1280px]:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]! max-[1280px]:gap-10! max-[1024px]:grid-cols-[1fr]! max-[1024px]:gap-12!"
      aria-labelledby="creator-title"
    >
      <Artboard width={541} height={596} className="creator-art">
        <div className="absolute left-0 top-11 w-[232px] rounded-2xl bg-blue p-4 text-cloud backdrop-blur-[10px]">
          <p className="text-base font-medium leading-[1.2]">Total Revenue</p>
          <p className="text-[10px] leading-[1.2]">July 1-28</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">
              $120.29
            </p>
            <span className="rounded-3xl bg-lime px-2 py-0.5 text-[10px] leading-5 text-ink">
              +12$
            </span>
          </div>
          <div className="mt-2 h-2 rounded-3xl bg-white">
            <div className="h-full w-[112px] rounded-3xl bg-lime" />
          </div>
        </div>
        <div className="absolute left-0 top-[194px] w-[134px] rounded-2xl bg-blue p-4 text-cloud backdrop-blur-[10px]">
          <p className="text-base font-medium leading-[1.2]">Year to Date</p>
          <p className="text-[10px] leading-[1.2]">2023</p>
          <p className="my-2 font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">
            $1,200.38
          </p>
          <span className="rounded-3xl bg-lime px-2 py-0.5 text-[10px] leading-5 text-ink">
            +12$
          </span>
        </div>
        <div className="[filter:url(#portrait-shadow)] absolute left-7 top-0 h-[596px] w-[435px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={a.imgImage2}
              alt="A creator wearing headphones and holding a tablet"
              loading="lazy"
              className="absolute left-[-28.51%] top-0 h-[114.6%] w-[157.01%] max-w-none"
            />
          </div>
        </div>
        <StudentsPanel
          className="absolute left-[283px] top-[413px]"
          images={[
            a.imgEllipse5,
            a.imgEllipse6,
            a.imgEllipse7,
            a.imgEllipse8,
            a.imgEllipse9,
            a.imgEllipse10,
            a.imgEllipse11,
          ]}
          badge={a.imgEllipse13}
          star={a.imgStar}
          feature
        />
        <Ornament
          image={a.imgImage3}
          mask={a.imgRectangle1}
          color="#d4fb20"
          x={305}
          y={114}
          size={215}
        />
      </Artboard>
      <div className="feature-copy max-[1280px]:gap-7! max-[1280px]:[&_h2]:text-[36px]! max-[1024px]:max-w-[621px]! max-[1024px]:mx-auto! max-[1024px]:w-full! max-[1024px]:[&_p]:max-w-none! max-[1024px]:[&_h2]:max-w-145! max-[768px]:[&_h2]:text-[32px]! flex flex-col gap-10">
        <SectionHeading id="creator-title" className="max-w-[391px]">
          Create &amp; Manage Courses Easily.
        </SectionHeading>
        <p className="max-w-[574px] text-lg leading-[1.6] text-slate">
          <strong className="font-bold text-ink">ByteSpace</strong> supports
          individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="flex flex-col gap-4 text-lg font-medium leading-[1.2]">
          {[
            'Share Your Expertise',
            'Monetize Your Passion',
            'Flexibility and Autonomy',
            'Build a Community',
          ].map((text) => (
            <li className="flex items-center gap-2" key={text}>
              <img src={a.imgStyleFilled} alt="" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <div className="py-[120px] max-[1280px]:py-[88px]! max-[1024px]:[&_.page-container]:gap-22! max-[768px]:py-[64px]! relative isolate overflow-hidden bg-[#fafafa]">
      <div
        className="w-360 h-full top-0 left-[calc(50%_-_720px)] [&_img]:max-w-none pointer-events-none absolute"
        aria-hidden="true"
      >
        <img
          className="absolute left-[-548px] top-[-506px]"
          src={a.imgGroup5}
          alt=""
        />
        <img
          className="absolute left-[-327px] top-[906px]"
          src={a.imgEllipse12}
          alt=""
        />
      </div>
      <div className="page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]! relative z-10 flex flex-col gap-[72px]">
        <LearnerFeatures />
        <CreatorFeatures />
      </div>
    </div>
  )
}
