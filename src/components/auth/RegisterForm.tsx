import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'

export function RegisterForm() {
  const [message, setMessage] = useState('')
  const inputClass = 'h-[52px] w-full rounded-xl border border-[#e5e6e8] bg-white px-6 text-lg leading-[1.6] placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-blue'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('This is a frontend demo. Registration is not connected yet.')
  }

  return (
    <section aria-labelledby="register-heading" className="relative w-full rounded-3xl bg-white px-6 pb-[52px] pt-10 text-ink sm:px-[63px] sm:pt-[61px] lg:min-h-[784px] lg:px-8 xl:px-[63px]">
      <div className="flex flex-col justify-between gap-16 lg:min-h-[671px]">
        <div>
          <p className="text-lg leading-[29px] text-blue">Create an Account</p>
          <h1 id="register-heading" className="font-heading text-[clamp(28px,5vw,44px)] font-semibold leading-[1.2] tracking-[-0.01em] sm:leading-[53px]">Welcome to<br />ByteSpace</h1>
          <form className="mt-10 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="register-name" className="text-sm font-medium leading-[17px]">Full Name</label>
              <input id="register-name" name="name" type="text" autoComplete="name" placeholder="Jamie Davis" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="register-email" className="text-sm font-medium leading-[17px]">Email</label>
              <input id="register-email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="register-password" className="text-sm font-medium leading-[17px]">Password</label>
              <input id="register-password" name="password" type="password" autoComplete="new-password" placeholder="********" required className={inputClass} />
            </div>
            <Button type="submit" className="self-end focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">Continue</Button>
          </form>
        </div>
        <p className="text-center text-base leading-[26px] text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="text-blue hover:underline focus-visible:outline-2 focus-visible:outline-blue">Login</Link>
        </p>
      </div>
      <p role="status" className="mt-3 text-center text-xs text-secondary empty:mt-0 lg:absolute lg:inset-x-6 lg:bottom-3 lg:mt-0">{message}</p>
    </section>
  )
}
