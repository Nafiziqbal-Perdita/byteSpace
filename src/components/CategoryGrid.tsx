const categories = [
  'Design',
  'Development',
  'IT & Software',
  'Business',
  'Marketing',
  'Photography',
]

// These six icons are reconstructed from the reference: their MCP export was rate-limited.
function CategoryIcon({ index }: { index: number }) {
  const shapes = [
    <>
      <path d="m8 7 4-4 17 17-4 4zM5 27l2-7L24 3l6 6-17 17z" />
      <path d="m9 10 4-4m3 11 4-4m-9 9 4-4M7 20l6 6" />
    </>,
    <>
      <path d="M9 3h15v27H9zM13 7h7M13 26h7M14 12l-3 4 3 4m5-8 3 4-3 4M6 7H3m3 6H3m3 6H3m3 6H3m24-18h3m-3 6h3m-3 6h3m-3 6h3" />
    </>,
    <>
      <rect x="3" y="5" width="27" height="20" rx="1" />
      <path d="M1 29h31M11 25v4m11-4v4" />
    </>,
    <>
      <path d="M6 30V4h14v26M20 11h8v19M3 30h28M10 8h6m-6 5h6m-6 5h6m-6 5h6m8-8h2m-2 5h2m-2 5h2" />
    </>,
    <>
      <path d="m4 16 18-9v18L4 20zM6 21l3 9h5l-3-10M26 10l4-3m-4 10h6m-6 7 4 3M4 8l-1-4M10 6l1-4" />
    </>,
    <>
      <path d="M3 8h8l2-4h7l2 4h8v22H3z" />
      <circle cx="16.5" cy="18" r="7" />
      <circle cx="16.5" cy="18" r="3" />
      <path d="M25 12h2" />
    </>,
  ]
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 33 33"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {shapes[index]}
    </svg>
  )
}

export function CategoryGrid({
  onSelect,
}: {
  onSelect: (category: string) => void
}) {
  return (
    <section
      id="categories"
      className="pt-18 pb-30 max-[1024px]:pb-22! max-[768px]:pt-14! max-[768px]:pb-16! page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]!"
      aria-labelledby="categories-title"
    >
      <div className="mx-auto max-w-[917px] text-center">
        <h2
          id="categories-title"
          className="font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#171a2c] md:text-[36px]"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-lg leading-[1.6] text-muted">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
      <div className="mt-17 min-[1280px]:grid-cols-[repeat(6,_167px)]! min-[1280px]:justify-between! max-[768px]:mt-9! grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-6 xl:gap-10">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className="max-[768px]:max-h-[190px]! max-[400px]:[&_span:last-child]:text-[16px]! flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-white transition-colors hover:border-blue hover:bg-cloud"
          >
            <span className="flex size-[60px] items-center justify-center rounded-full bg-lime text-ink">
              <CategoryIcon index={index} />
            </span>
            <span className="text-xl leading-6 text-ink">{category}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
