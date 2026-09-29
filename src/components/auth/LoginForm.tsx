import { useState } from 'react'
import { Button } from '../ui'

export function LoginForm() {
  const [message, setMessage] = useState('')
  const inputClass = 'h-[52px] w-full rounded-xl border border-[#e5e6e8] bg-white px-6 text-lg leading-[1.6] placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-blue'

  return (
    <section aria-labelledby="login-heading" className="relative w-full rounded-3xl bg-white px-6 pb-10 pt-10 text-ink sm:px-[63px] sm:pt-[61px] lg:min-h-[784px] lg:px-8 xl:px-[63px]">
      <div className="flex flex-col justify-between gap-10 lg:min-h-[683px]">
        <div>
          <p className="text-lg leading-[29px] text-blue">Sign In</p>
          <h1 id="login-heading" className="font-heading text-[clamp(28px,5vw,44px)] font-semibold leading-[1.2] tracking-[-0.01em] sm:leading-[53px]">Welcome Back</h1>
          <form className="mt-10 flex flex-col gap-6" onSubmit={(event) => {
            event.preventDefault()
            setMessage('This is a frontend demo. Sign in is not connected yet.')
          }}>
            <div className="flex flex-col gap-2">
              <label htmlFor="login-email" className="text-sm font-medium leading-[17px]">Email</label>
              <input id="login-email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="login-password" className="text-sm font-medium leading-[17px]">Password</label>
              <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="********" required className={inputClass} />
            </div>
            <Button type="submit" className="self-end focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">Sign In</Button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full items-center gap-[11px] text-lg leading-[29px] text-[#888]" aria-hidden="true">
            <span className="min-w-0 flex-1"><img src="/assets/login/imgLine.svg" alt="" className="h-px w-full" /></span>
            <span>or</span>
            <span className="min-w-0 flex-1"><img src="/assets/login/imgLine.svg" alt="" className="h-px w-full" /></span>
          </div>
          <div className="flex gap-4">
            {[['Facebook', 'imgFrame.svg'], ['Google', 'imgFrame1.svg']].map(([provider, icon]) => (
              <button key={provider} type="button" aria-label={`Sign in with ${provider}`} onClick={() => setMessage(`${provider} sign in is not connected in this demo.`)} className="flex size-[72px] items-center justify-center rounded-3xl border border-[#d1d1d1] hover:bg-cloud focus-visible:outline-2 focus-visible:outline-blue">
                <img src={`/assets/login/${icon}`} alt="" />
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-base leading-[26px] text-[#888]">
          New user?{' '}
          <a href="#create-account" onClick={(event) => {
            event.preventDefault()
            setMessage('Account registration is not connected in this demo.')
          }} className="text-blue hover:underline focus-visible:outline-2 focus-visible:outline-blue">Create an account</a>
        </p>
      </div>
      <p role="status" className="mt-3 text-center text-xs text-secondary empty:mt-0 lg:absolute lg:inset-x-6 lg:bottom-3 lg:mt-0">{message}</p>
    </section>
  )
}
