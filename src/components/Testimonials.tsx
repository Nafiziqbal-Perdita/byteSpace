import { testimonialsAssets as a } from '../data/assets'
import { SectionHeading } from './ui'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    image: a.imgEllipse,
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    image: a.imgEllipse1,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    image: a.imgEllipse2,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

export function Testimonials() {
  return (
    <section
      id="community"
      className="pt-[74px] pb-[57px] min-h-196 min-[1280px]:[&_.page-container]:max-w-301! max-[1024px]:py-[72px]! max-[768px]:py-[56px]! relative isolate overflow-hidden bg-[#fafafa]"
      aria-labelledby="testimonials-title"
    >
      <div
        className="w-360 h-full top-0 left-[calc(50%_-_720px)] [&_img]:max-w-none pointer-events-none absolute"
        aria-hidden="true"
      >
        <img
          className="absolute left-[802px] top-[-281px]"
          src={a.imgEllipse11}
          alt=""
        />
        <img
          className="absolute left-[355px] top-[-178px]"
          src={a.imgEllipse12}
          alt=""
        />
        <img
          className="absolute left-[-482px] top-[109px]"
          src={a.imgEllipse8}
          alt=""
        />
      </div>
      <div className="page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]! relative z-10">
        <div className="min-[1280px]:grid-cols-[577px_580px]! min-[1280px]:gap-[43px]! grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading id="testimonials-title" className="text-black">
            Discover What Our Community Is Saying
          </SectionHeading>
          <p className="text-lg leading-[1.6] text-secondary">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-18 min-[1280px]:grid-cols-[repeat(3,_374px)]! min-[1280px]:gap-[41px]! max-[1280px]:gap-6! max-[1280px]:[&_figure]:p-[22px]! max-[1024px]:mt-12! max-[768px]:grid-cols-[minmax(0,_480px)]! max-[768px]:justify-center! max-[768px]:[&_figure]:p-6! grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <figure
              key={item.name}
              className="flex min-w-0 flex-col gap-6 rounded-3xl bg-white p-6"
            >
              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
                className="size-20"
                loading="lazy"
              />
              <figcaption>
                <p
                  className={`font-heading text-xl font-semibold tracking-[-0.01em] text-black ${i === 0 ? 'leading-6' : 'leading-7'}`}
                >
                  {item.name}
                </p>
                <p className="text-lg leading-[1.6] text-blue">{item.role}</p>
              </figcaption>
              <blockquote className="text-lg leading-[1.6] text-secondary">
                "{item.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
