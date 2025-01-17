import Link from 'next/link'

export default function PlaylistCard() {
  return (
    <Link href={'/'}>
                    <article className="flex flex-col h-full p-6  border border-gray-600 rounded-lg hover:border-1 hover:border-blue-700 hover:bg-blue-50">
                        <header>
                            <h3 className="text-lg font-semibold"> Cody One</h3>
                        </header>
                        <p className="mt-2 mb-6 text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat cupiditate vero reiciendis quas. Facilis!                            
                        </p>
                        <footer className="mt-auto">
                            <ul className="flex flex-wrap gap-2">
                                <li className="px-2 py-1 text-xs font-medimum text-blue-600 rounded-lg bg-blue-100">Code</li>
                                <li className="px-2 py-1 text-xs font-medimum text-blue-600 rounded-lg bg-blue-100">Sleep</li>
                            </ul>
                        </footer>
                    </article>
    </Link>
  )
}
