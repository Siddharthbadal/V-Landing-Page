import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='py-1.5 sm:py-4'>
        <div className='container mx-auto flex items-center justify-between gap-x-10'>
            
            <Logo  />

            <nav className='flex-grow hidden sm:block'>
            <ul className='flex items-center gap-x-8 '>
                <li className='mr-auto'>
                    <Link href={'/library'}
                        className='text-xl font-semibold text-black hover:text-blue-950'
                    >Library</Link>
                </li>
                <li>
                    <Link href={'/'}
                        className='text-xl font-semibold text-black hover:text-blue-950'
                    >Log In</Link>
                </li>
                <li>
                    <Link href={'/'}
                        className='px-3 py-2 font-semibold rounded-xl bg-blue-800 text-blue-100 hover:bg-blue-950'
                    >SignUp</Link>
                </li>
            </ul>
            </nav>

            <div>
                <Link href="/" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </Link>
            </div>
        </div>
    </header>
  )
}
