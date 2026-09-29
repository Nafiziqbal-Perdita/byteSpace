import { useState } from 'react'
import { Link } from 'react-router-dom'
import { heroAssets } from '../data/assets'
import { Logo } from './ui'

export type AccountAction = 'signin' | 'join' | 'creator' | 'cart'

export function Header({
  onAction,
}: {
  onAction: (action: AccountAction) => void
}) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="h-30 [&_.logo]:[transform:translate(2px,_-6.5px)] [&_a:hover]:text-lime max-[1024px]:h-25! max-[768px]:h-22! max-[768px]:[&_.logo]:[transform:none]! relative z-30">
      <div className="page-container w-[calc(100%_-_48px)] max-w-300 mx-auto max-[768px]:w-[calc(100%_-_40px)]! relative flex h-full items-center justify-between">
        <Logo light />
        <nav
          className="max-[1024px]:gap-[18px]! max-[768px]:hidden! absolute left-1/2 flex -translate-x-1/2 gap-6 text-base text-cloud"
          aria-label="Main navigation"
        >
          <a href="#home" className="font-medium" aria-current="page">
            Home
          </a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
        </nav>
        <div className="[&_button:hover]:text-lime max-[1024px]:gap-4! max-[768px]:hidden! flex items-center gap-6 text-base text-cloud">
          <Link to="/login">Sign In</Link>
          <button onClick={() => onAction('join')}>Join Us</button>
          <button
            className="flex size-6 items-center justify-center"
            aria-label="Open shopping bag"
            onClick={() => onAction('cart')}
          >
            <img src={heroAssets.imgStyleOutlined1} alt="" />
          </button>
        </div>
        <button
          className="hidden max-[768px]:flex! size-11 items-center justify-center text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col gap-5 border-t border-white/20 bg-blue px-6 py-6 text-white shadow-xl"
          aria-label="Mobile navigation"
        >
          <a href="#home" onClick={close}>
            Home
          </a>
          <a href="#courses" onClick={close}>
            Courses
          </a>
          <a href="#creators" onClick={close}>
            Creators
          </a>
          <Link to="/login" className="text-left" onClick={close}>
            Sign In
          </Link>
          <button
            className="text-left"
            onClick={() => {
              close()
              onAction('join')
            }}
          >
            Join Us
          </button>
          <button
            className="text-left"
            onClick={() => {
              close()
              onAction('cart')
            }}
          >
            Shopping bag
          </button>
        </nav>
      )}
    </header>
  )
}
