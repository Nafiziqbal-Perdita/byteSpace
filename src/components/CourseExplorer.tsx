import { useState } from 'react'
import { categoryRows, courses, type Course } from '../data/courses'
import { CourseCard } from './CourseCard'
import { SectionHeading } from './ui'

export function CourseExplorer({
  query,
  activeCategory,
  onCategory,
  onSelect,
  onClear,
}: {
  query: string
  activeCategory: string
  onCategory: (category: string) => void
  onSelect: (course: Course) => void
  onClear: () => void
}) {
  const [more, setMore] = useState(false)
  const visible = courses.filter(
    (course) =>
      (activeCategory === 'Featured' ||
        course.categories.includes(activeCategory)) &&
      `${course.title} ${course.categories.join(' ')} purepearl studio`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  )
  return (
    <section
      id="courses"
      className="pt-18 max-[768px]:pt-14! page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]!"
      aria-labelledby="courses-title"
    >
      <div className="mx-auto max-w-[917px] text-center">
        <SectionHeading
          id="courses-title"
          className="mx-auto max-w-[588px] text-[#171a2c]"
        >
          Discover Your Passion, Build Your Skills
        </SectionHeading>
        <p className="mt-4 text-lg leading-[1.6] text-muted">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>
      <div className="flex flex-col gap-[21px] mt-[42px] max-[768px]:gap-3! max-[768px]:mt-8!" aria-label="Filter courses by category">
        {categoryRows.map((row, i) => (
          <div className="flex flex-wrap justify-center items-center gap-4 max-[768px]:gap-[10px]!" key={i}>
            {row.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => onCategory(category)}
                className={`p-[12px_16px] rounded-[24px] text-[16px] font-medium leading-[1.2] [&:hover]:bg-[#e9eddd] [&[aria-pressed='true']:hover]:bg-[#c6eb10] max-[768px]:p-[10px_14px]! max-[768px]:text-[14px]! ${activeCategory === category ? 'bg-lime text-ink' : 'bg-cloud text-slate'}`}
              >
                {category}
              </button>
            ))}
            {i === 2 && (
              <button
                className="rounded-3xl px-1 py-3 text-base font-medium leading-[1.2] text-blue hover:underline"
                aria-expanded={more}
                aria-controls="more-categories"
                onClick={() => setMore(!more)}
              >
                {more ? '− Less' : '+ More'}
              </button>
            )}
          </div>
        ))}
        {more && (
          <div id="more-categories" className="flex flex-wrap justify-center items-center gap-4 max-[768px]:gap-[10px]!">
            {[
              'Business',
              'IT & Software',
              'Design',
              'Development',
              'Finance',
              'Sport',
            ].map((category) => (
              <button
                className={`p-[12px_16px] rounded-[24px] text-[16px] font-medium leading-[1.2] [&:hover]:bg-[#e9eddd] [&[aria-pressed='true']:hover]:bg-[#c6eb10] max-[768px]:p-[10px_14px]! max-[768px]:text-[14px]! ${activeCategory === category ? 'bg-lime' : 'bg-cloud'}`}
                aria-pressed={activeCategory === category}
                onClick={() => onCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      {(query || activeCategory !== 'Featured') && (
        <div
          className="mt-8 flex flex-wrap items-center justify-between gap-4 text-slate"
          role="status"
        >
          <p>
            {visible.length} {visible.length === 1 ? 'course' : 'courses'}
            {query && <> matching “{query}”</>}
            {activeCategory !== 'Featured' && <> in {activeCategory}</>}
          </p>
          <button
            onClick={onClear}
            className="font-medium text-blue underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
      <div className="mt-[77px] gap-x-10 min-[1280px]:grid-cols-[repeat(3,_373px)]! min-[1280px]:justify-between! max-[768px]:mt-11! max-[768px]:gap-6! max-[768px]:grid-cols-[minmax(0,_420px)]! max-[768px]:justify-center! grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} onSelect={onSelect} />
        ))}
        {visible.length === 0 && (
          <div className="col-span-full rounded-3xl border border-line p-12 text-center">
            <h3 className="font-heading text-xl font-semibold">
              No courses found
            </h3>
            <p className="mt-3 text-secondary">
              Try another topic or explore our featured courses.
            </p>
            <button className="button inline-flex shrink-0 items-center justify-center rounded-[24px] bg-lime text-ink p-[12px_24px] text-[18px] font-medium leading-[1.2] text-center [&:hover]:bg-[#c6eb10] [&:active]:bg-[#b6d908] mt-6" onClick={onClear}>
              View featured courses
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
