import PlaylistCard from "@/components/PlaylistCard"
import PlaylistSidbar from "@/components/PlaylistSidbar"

export default function page() {
  return (
    <main>
            <section className="flex flex-col py-16 gap-y-12">
                <div className="container max-w-screen-sm">
                    <h1 className="text-5xl font-bold text-center">Playlist</h1>
                    <p className="mt-2 text-lg text-center text-gray-600">Most popular playlist to find more about our configuration tools and libaries.</p>
                </div>
                <div className="container grid grid-cols-3 gap-8">        
                    <PlaylistSidbar />
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <PlaylistCard   />
                        <PlaylistCard   />
                        <PlaylistCard   />
                        <PlaylistCard   />
                        <PlaylistCard   />
                        <PlaylistCard   />
                    </div>                                    
                </div>
            </section>
    </main>
  )
}
