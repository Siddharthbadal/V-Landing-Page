import Link from 'next/link'

export default function Header() {
  return (
    <header className='py-4'>
        <div className='container mx-auto flex items-center gap-x-10'>
            <Link href={'/'}
                className='flex items-center gap-x-2'
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 -rotate-6 text-blue-800">
                  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
            </svg>

                <span className='text-2xl text-black/[0.7] font-extrabold'>Cody</span>
            </Link>

            <nav className='flex-grow'>
            <ul className='flex items-center gap-x-8 '>
                <li className='mr-auto'>
                    <Link href={'/'}
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
        </div>
    </header>
  )
}
