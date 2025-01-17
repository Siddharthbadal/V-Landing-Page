import Link from "next/link"

const playlistTags = [
    {
        title:"productivity",
        hash:"#productivity",
    },
    {
        title:"themes",
        hash:"#theme",
    },
    {
        title:"livewire",
        hash:"#livewire",
    },
]

export default function PlaylistSidbar() {
  return (
    <div className="col-span-1 flex flex-col gap-y-6">
            <input type="search" placeholder="Playlist" className="px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 " />

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Tags</h3>
                <ul className="flex flex-col gap-y-1">
                {
                    playlistTags.map(tag=>(
                        <li key={tag.hash} className="w-full tet-left px-3 py-2">
                            <Link href={tag.hash}   
                            className="text-md font-semibold text-gray-600 hover:text-gray-700"        
                            >
                                <span>
                                    {tag.title}         
                                </span>
                            </Link>
                        </li>

                    ))
                }
                    
                </ul>
            </div>
        </div>
  )
}
