import { Link } from 'react-router-dom'
import { LoginForm } from '../components/auth/LoginForm'
import { LoginIllustration } from '../components/auth/LoginIllustration'

export function Login() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-blue font-body lg:min-h-[max(1024px,100svh)]">
      <img src="/assets/login/imgGroup4.svg" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-2px] -z-10 max-w-none -translate-x-1/2" />
      <header className="mx-auto flex h-[100px] w-full max-w-[1196px] shrink-0 items-start px-6 pt-[35px] lg:h-[120px] min-[1244px]:px-0">
        <Link to="/" aria-label="ByteSpace home" className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">
          <img src="/assets/login/imgVector.svg" alt="" />
        </Link>
      </header>
      <main className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-6 pb-16 lg:my-auto lg:grid-cols-2 lg:gap-[42px] lg:pb-[120px] min-[1248px]:px-0">
        <section className="order-2 mx-auto w-full max-w-[579px] min-w-0 text-cloud lg:order-1 lg:pl-0.5" aria-labelledby="login-intro">
          <h2 id="login-intro" className="font-heading text-xl font-semibold leading-6 tracking-[-0.01em]">Sign in with ease</h2>
          <p className="mt-4 max-w-[475px] text-lg leading-[29px]">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
          <div className="mt-10 lg:mt-[87px]"><LoginIllustration /></div>
        </section>
        <div className="order-1 mx-auto min-w-0 w-full max-w-[579px] lg:order-2"><LoginForm /></div>
      </main>
    </div>
  )
}
