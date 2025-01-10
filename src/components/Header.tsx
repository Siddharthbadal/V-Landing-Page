import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='py-4'>
        <div className='container mx-auto flex items-center gap-x-10'>
            
            <Logo  />

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
