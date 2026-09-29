import { useEffect, useRef, useState } from 'react'
import type { Course } from '../data/courses'
import type { AccountAction } from './Header'
import { Button } from './ui'

export type DialogContent =
  | { type: AccountAction }
  | { type: 'course'; course: Course }
  | { type: 'info'; title: string }

export function ActionDialog({
  content,
  onClose,
}: {
  content: DialogContent | null
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [status, setStatus] = useState('')
  useEffect(() => {
    setStatus('')
    if (content) ref.current?.showModal()
    else ref.current?.close()
  }, [content])
  const account =
    content && ['signin', 'join', 'creator'].includes(content.type)
  const title = !content
    ? ''
    : content.type === 'course'
      ? content.course.title
      : content.type === 'info'
        ? content.title
        : {
            signin: 'Welcome Back',
            join: 'Welcome to ByteSpace',
            creator: 'Join as Creator',
            cart: 'Your shopping bag',
          }[content.type]
  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className="fixed [inset:0] m-auto w-[min(520px,_calc(100%_-_32px))] max-h-[calc(100dvh_-_48px)] overflow-y-auto [border:1px_solid_var(--color-line)] [&::backdrop]:bg-[#09153599] [&::backdrop]:[backdrop-filter:blur(4px)] rounded-3xl bg-white p-7 text-ink shadow-2xl sm:p-10"
      aria-labelledby="dialog-title"
    >
      <button
        className="absolute right-4 top-3 flex size-9 items-center justify-center rounded-full text-2xl hover:bg-cloud"
        onClick={onClose}
        aria-label="Close dialog"
      >
        ×
      </button>
      <h2
        id="dialog-title"
        className="pr-5 font-heading text-2xl font-semibold leading-[1.3]"
      >
        {title}
      </h2>
      {account && (
        <form
          className="mt-7 flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus(
              'Account services are currently unavailable. Please try again later.',
            )
          }}
        >
          {content?.type !== 'signin' && (
            <label className="flex flex-col gap-2 text-sm">
              Full Name
              <input
                className="w-full h-12 px-4 [border:1px_solid_var(--color-line)] rounded-[24px] text-[16px]"
                name="name"
                autoComplete="name"
                required
              />
            </label>
          )}
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input
              className="w-full h-12 px-4 [border:1px_solid_var(--color-line)] rounded-[24px] text-[16px]"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Password
            <input
              className="w-full h-12 px-4 [border:1px_solid_var(--color-line)] rounded-[24px] text-[16px]"
              type="password"
              name="password"
              autoComplete={
                content?.type === 'signin' ? 'current-password' : 'new-password'
              }
              minLength={8}
              required
            />
          </label>
          <Button type="submit" className="self-start">
            {content?.type === 'signin' ? 'Sign In' : 'Continue'}
          </Button>
        </form>
      )}
      {content?.type === 'cart' && (
        <>
          <p className="mt-6 text-secondary">
            Your shopping bag is empty. Find your next course and start
            learning.
          </p>
          <a
            href="#courses"
            onClick={onClose}
            className="button inline-flex shrink-0 items-center justify-center rounded-[24px] bg-lime text-ink p-[12px_24px] text-[18px] font-medium leading-[1.2] text-center [&:hover]:bg-[#c6eb10] [&:active]:bg-[#b6d908] mt-6 inline-flex"
          >
            Explore courses
          </a>
        </>
      )}
      {content?.type === 'course' && (
        <div className="mt-6">
          <img
            src={content.course.image}
            alt=""
            className="aspect-[341/195] w-full rounded-xl object-cover"
          />
          <p className="mt-4 text-secondary">by purepearl studio</p>
          <p className="mt-3 text-secondary">
            17 lessons · 2 hours 16 mins · Beginner
          </p>
          <p className="mt-4 font-heading text-xl font-semibold text-blue">
            $25{' '}
            <span className="font-body text-sm font-normal text-secondary">
              /lifetime
            </span>
          </p>
          <Button
            className="mt-6"
            onClick={() =>
              setStatus(
                'Enrollment is currently unavailable. Please try again later.',
              )
            }
          >
            Enroll in course
          </Button>
        </div>
      )}
      {content?.type === 'info' && (
        <p className="mt-6 text-secondary">
          {content.title === 'Cookies Settings'
            ? 'This page does not use analytics or advertising cookies.'
            : `${content.title} information is not available yet.`}
        </p>
      )}
      {status && (
        <p role="status" className="mt-5 text-sm text-blue">
          {status}
        </p>
      )}
    </dialog>
  )
}
