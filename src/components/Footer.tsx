import { useState, type FormEvent } from 'react'
import { footerAssets } from '../data/assets'
import { Button, Logo } from './ui'

export function Footer({
  onCategory,
  onInfo,
  onJoin,
}: {
  onCategory: (category: string) => void
  onInfo: (title: string) => void
  onJoin: () => void
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  function subscribe(event: FormEvent) {
    event.preventDefault()
    setStatus(
      'Newsletter signup is currently unavailable. Please try again later.',
    )
  }
  return (
    <footer className="pt-[71px] pb-12 [&_button:not(.button):hover]:text-blue [&_button:not(.button):hover]:underline [&_button:not(.button):hover]:underline-offset-[3px] [&_a:not(.logo):hover]:text-blue [&_a:not(.logo):hover]:underline [&_a:not(.logo):hover]:underline-offset-[3px] max-[768px]:[padding-block:56px_32px]! relative bg-white">
      <div className="absolute top-0 left-[50%] [transform:translateX(-50%)] w-360 max-w-full overflow-hidden [&_img]:max-w-none" aria-hidden="true">
        <img src={footerAssets.imgLine27} alt="" />
      </div>
      <div className="page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]!">
        <div className="max-[1280px]:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]! max-[1280px]:gap-12! max-[1024px]:grid-cols-[1fr]! max-[768px]:gap-6! grid gap-14 lg:grid-cols-[528px_1fr] lg:gap-[92px]">
          <div id="newsletter">
            <Logo />
            <p className="mt-4 text-sm leading-[1.6]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={subscribe}
              className="mt-[45px] max-[768px]:mt-7! max-[768px]:[&_>_div]:gap-3! max-[768px]:[&_input]:px-4! max-w-[504px]"
            >
              <div className="flex items-start gap-6">
                <label className="min-w-0 flex-1">
                  <span className="sr-only">Your email address</span>
                  <input
                    className="h-[52px] w-full rounded-full border border-line bg-white px-6 text-base leading-[1.6] placeholder:text-ink"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </label>
                <Button type="submit">Search</Button>
              </div>
              <p className="mt-6 text-xs leading-[1.6]">
                By subscribing, you agree to our{' '}
                <button
                  type="button"
                  className="hover:underline"
                  onClick={() => onInfo('Privacy Policy')}
                >
                  Privacy Policy
                </button>{' '}
                and consent to receive updates from our company.
              </p>
              {status && (
                <p role="status" className="mt-3 text-sm text-blue">
                  {status}
                </p>
              )}
            </form>
          </div>
          <nav
            className="[&_button]:text-left [&_a]:text-left max-[1024px]:max-w-155! max-[768px]:gap-x-4! max-[768px]:text-[13px]! grid grid-cols-3 gap-6 text-sm leading-[1.6] xl:gap-10"
            aria-label="Footer navigation"
          >
            <div>
              <h2 className="invisible mb-6 text-base leading-6">Browse</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#courses">Featured Courses</a>
                </li>
                <li>
                  <a href="#categories">Featured Categories</a>
                </li>
                {['Business', 'IT', 'Design'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        onCategory(item === 'IT' ? 'IT & Software' : item)
                      }
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12">
              <ul className="flex flex-col gap-4">
                {[
                  'Development',
                  'Marketing',
                  'Photography',
                  'Finance',
                  'Sport',
                ].map((item) => (
                  <li key={item}>
                    <button onClick={() => onCategory(item)}>{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="invisible mb-6 text-base leading-6">Platform</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <button onClick={onJoin}>Become a Creator</button>
                </li>
                {['Affiliate Program', 'Contact', 'Help'].map((item) => (
                  <li key={item}>
                    <button onClick={() => onInfo(item)}>{item}</button>
                  </li>
                ))}
                <li>
                  <a href="#community">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-[130px] max-[1024px]:mt-18! max-[768px]:mt-14! relative">
          <div className="overflow-hidden w-full h-[1px] [&_img]:max-w-none" aria-hidden="true">
            <img src={footerAssets.imgLine} alt="" />
          </div>
          <div className="flex flex-col justify-between gap-5 pt-[22px] text-xs leading-[1.6] sm:flex-row">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map(
                (item) => (
                  <button key={item} onClick={() => onInfo(item)}>
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
