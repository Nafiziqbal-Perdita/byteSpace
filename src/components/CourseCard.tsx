import { coursesAssets as a, featuresAssets as f } from '../data/assets'
import type { Course } from '../data/courses'
import { AvatarStack } from './ui'

export function CourseCard({
  course,
  onSelect,
  decorative = false,
}: {
  course: Course
  onSelect?: (course: Course) => void
  decorative?: boolean
}) {
  const assets = decorative ? f : a
  return (
    <article
      className={`h-96 overflow-hidden max-[768px]:h-auto! max-[768px]:min-h-96! max-[400px]:p-3! relative min-w-0 rounded-3xl border border-line bg-white p-[15px] ${decorative ? 'w-[373px] [&_.course-title]:leading-[28px] [&_.course-body_>_p]:mt-4 max-[768px]:h-96! max-[768px]:min-h-0! max-[768px]:[&_.course-image]:h-[195.145px]! max-[768px]:[&_.course-image-labels]:top-[150px]! max-[768px]:[&_.course-image-labels]:bottom-auto! max-[768px]:[&_.course-image-labels]:gap-3! max-[768px]:[&_.course-image-labels_span]:px-3! max-[768px]:[&_.course-image-labels_span]:text-[12px]! max-[400px]:p-[15px]! max-[400px]:[&_.course-image-labels]:gap-3! max-[400px]:[&_.course-image-labels]:left-3! max-[400px]:[&_.course-image-labels_span]:px-3! max-[400px]:[&_.course-image-labels_span]:text-[12px]! max-[400px]:[&_.course-title]:text-[20px]!' : ''}`}
    >
      <div className="course-image h-[195.145px] max-[768px]:h-auto! max-[768px]:aspect-[341_/_195.145]! relative overflow-hidden rounded-xl bg-[#443131]">
        <img
          src={decorative ? f.imgFrame : course.image}
          alt={decorative ? '' : course.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="course-image-labels top-[150px] max-[768px]:top-auto! max-[768px]:bottom-[18px]! max-[768px]:gap-[6px]! max-[768px]:[&_span]:px-2! max-[768px]:[&_span]:text-[11px]! max-[400px]:gap-[6px]! max-[400px]:left-2! max-[400px]:[&_span]:px-2! max-[400px]:[&_span]:text-[10px]! absolute left-3 flex gap-3 whitespace-nowrap text-xs font-medium leading-[1.2] text-secondary">
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((text) => (
            <span
              key={text}
              className="rounded-3xl bg-[#f6f6f6]/60 px-3 py-1.5 backdrop-blur-[4px]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className="course-body mt-[20.855px] max-[768px]:mt-[21px]!">
        <div className="relative">
          <h3 className="course-title max-w-[min(280px,_calc(100%_-_52px))] whitespace-nowrap overflow-hidden text-ellipsis [&_button:hover]:text-blue max-[400px]:text-[18px]! font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-black">
            {decorative ? (
              course.title
            ) : (
              <button
                className="block w-full truncate text-left"
                title={course.title}
                onClick={() => onSelect?.(course)}
              >
                {course.title}
              </button>
            )}
          </h3>
          <p className="text-xs leading-[1.6] text-secondary">
            by <span className="text-blue">purepearl studio</span>
          </p>
          <span
            className="course-rating absolute right-0 top-0 flex items-center text-lg leading-[1.6] text-secondary"
            aria-label="Rated 4.5 out of 5"
          >
            4.5
            <img
              src={
                !decorative && course.id === 'digital-assets'
                  ? a.imgStyleOutlined1
                  : assets.imgStyleOutlined
              }
              alt=""
            />
          </span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-cloud px-3 py-1.5 text-xs font-medium leading-[1.2] text-slate">
            <img src={assets.imgSignalCellularAlt} alt="" />
            Beginner
          </span>
          <AvatarStack
            images={[
              assets.imgEllipse,
              assets.imgEllipse1,
              assets.imgEllipse2,
              assets.imgEllipse3,
            ]}
            badge={assets.imgEllipse4}
            count="26+"
          />
        </div>
        <p className="mt-4 flex items-end">
          <span className="font-heading text-xl leading-6 font-semibold tracking-[-0.01em] text-blue">
            $25
          </span>
          <span className="text-xs leading-[1.6] text-secondary">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  )
}
