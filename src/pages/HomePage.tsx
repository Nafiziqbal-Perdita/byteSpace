import { useState } from 'react'
import { ActionDialog, type DialogContent } from '../components/ActionDialog'
import { CategoryGrid } from '../components/CategoryGrid'
import { CourseExplorer } from '../components/CourseExplorer'
import { CreatorCTA } from '../components/CreatorCTA'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Hero, PartnerLogos } from '../components/Hero'
import { Testimonials } from '../components/Testimonials'
import { PortraitShadow } from '../components/PortraitShadow'

export function HomePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Featured')
  const [dialog, setDialog] = useState<DialogContent | null>(null)
  const goToCourses = () =>
    requestAnimationFrame(() =>
      document
        .getElementById('courses')
        ?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'instant'
            : 'smooth',
        }),
    )
  const selectCategory = (value: string) => {
    setCategory(value)
    setQuery('')
    goToCourses()
  }
  const joinCreator = () => setDialog({ type: 'creator' })
  return (
    <>
      <PortraitShadow />
      <a href="#courses" className="fixed left-4 top-4 z-[100] w-[1px] h-[1px] overflow-hidden [clip-path:inset(50%)] whitespace-nowrap rounded-[24px] bg-lime text-ink [&:focus]:w-auto [&:focus]:h-auto [&:focus]:p-[12px_24px] [&:focus]:[clip-path:none]">
        Skip to courses
      </a>
      <main>
        <Hero
          onSearch={(value) => {
            setQuery(value)
            setCategory('Featured')
            goToCourses()
          }}
          onAction={(type) => setDialog({ type })}
        />
        <PartnerLogos />
        <CourseExplorer
          query={query}
          activeCategory={category}
          onCategory={(value) => {
            setCategory(value)
            setQuery('')
          }}
          onSelect={(course) => setDialog({ type: 'course', course })}
          onClear={() => {
            setQuery('')
            setCategory('Featured')
          }}
        />
        <CategoryGrid onSelect={selectCategory} />
        <Features />
        <CreatorCTA onJoin={joinCreator} />
        <Testimonials />
      </main>
      <Footer
        onCategory={selectCategory}
        onJoin={joinCreator}
        onInfo={(title) => setDialog({ type: 'info', title })}
      />
      <ActionDialog content={dialog} onClose={() => setDialog(null)} />
    </>
  )
}
