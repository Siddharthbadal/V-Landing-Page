import Image from "next/image";
import Link from "next/link";
import TagLine from "./TagLine";

export default function Hero() {
  return (
    <main>
        <section className="pt-28 pb-48">
                <div className="container flex gap-x-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-6xl font-black tracking-wide">
                            Your  
                            <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent px-2 ">Coding</span>
                            Friend
                        </h1>
                        
                        <TagLine>
                                Unlock your hidden coding potential with new themes, colors and highlights.
                        </TagLine>
                    
                    <div className="mt-8 flex gap-x-2">
                        <Link href={'/playlist'} className="px-8 py-3 text-lg font-semibold rounded-lg bg-blue-800 text-blue-100 hover:bg-blue-900">Explore</Link>
                        <Link href={'features'} className="px-8 py-3 text-lg font-semibold rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200">Learn More</Link>
                    </div> 
                    </div> 
               
                <div className="w-2/3 relative prespective-1000 scale-110">
               <div className="hero-reflection"></div>
                    <Image 
                        src={"https://res.cloudinary.com/db4n4ciqv/image/upload/t_better/v1736429146/cody_tllbag.png"}
                        width={600}
                        height={600}
                        quality={100}
                        alt="Cody"
                        className="hero-image"

                    />
                </div>
            </div>
        </section>
    </main>
  )
}
