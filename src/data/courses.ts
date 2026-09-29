import { coursesAssets as a } from './assets'

export type Course = {
  id: string
  title: string
  image: string
  categories: string[]
}
export const courses: Course[] = [
  {
    id: 'figma',
    title: 'Learn Figma from Basic',
    image: a.imgFrame,
    categories: [
      'UI/UX Design',
      'Design',
      'Graphic Design',
      'Drawing & Painting',
      'Digital Illustration',
    ],
  },
  {
    id: 'digital-assets',
    title: 'Build Digital Asset',
    image: a.imgFrame1,
    categories: [
      'Design',
      'Graphic Design',
      'Animation',
      'Creative Marketing',
      'Film & Video',
      'Photography',
    ],
  },
  {
    id: 'big-data',
    title: 'the Power of Big Data',
    image: a.imgFrame2,
    categories: [
      'Data Science',
      'IT & Software',
      'Development',
      'Web Development',
    ],
  },
  {
    id: 'productivity',
    title: 'Balancing Productivity and Self-Care',
    image: a.imgFrame3,
    categories: ['Productivity', 'Business'],
  },
  {
    id: 'money',
    title: 'Mastering Money Management',
    image: a.imgFrame4,
    categories: ['Finance', 'Business', 'Freelance & Entrepreneurship'],
  },
  {
    id: 'startup',
    title: 'From Idea to Startup Success',
    image: a.imgFrame5,
    categories: [
      'Business',
      'Marketing',
      'Social Media',
      'Freelance & Entrepreneurship',
    ],
  },
]
export const categoryRows = [
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]
