import Link from "next/link";

const guidesPoints = [
    {
        title: "Follow the Rule Two",
        time: "5.30"
    },
    {
        title: "Follow the Rule Three",
        time: "6.00"
    },
    {
        title: "Follow the Rule One",
        time: "6.30"
    },
]

export default function page() {
  return (
    <main>
        <section className="flex flex-col py-16 gap-y-12">
                <div className="container max-w-screen-sm">
                    <h1 className="text-5xl font-bold text-center text-blue-600">Theme Blue</h1>
                    <p className="mt-2 text-lg text-center text-gray-600">Automatically apply multiple themes of each section of the tool to make it look better.</p>
                </div>

                <div className="container grid grid-cols-3 gap-x-8">
                    <div className="col-span-1 flex flex-col gap-y-4">
                        <div className="flex items-center justify-between gap-x-4">
                            <h3 className="font-bold text-lg text-gray-600">Guides</h3>
                            <div className="flex gap-x-2">
                            <Link href={'/library'} className="">
                                ⚫
                            </Link>
                            <Link href={'/library'}>
                                🟢
                            </Link>
                            <Link href={'/library'}>
                                🔵
                            </Link>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-1">
                        {
                            guidesPoints.map((guide,index)=>(
                                <li key={index} 
                                    className=" "
                                >
                                    <Link href={'/library'} 
                                    className="flex items-center justify-between w-full p-3 text-blue-700 rounded-lg gap-x-4 bg-blue-100 hover:text-gray-700 hover:bg-gray-100"
                                    >
                                   <span className="font-semibold truncate"> {guide.title}</span>
                                   <span className="">{guide.time}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <iframe className="w-full rounded-lg aspect-video" width="560" height="315" src="https://www.youtube.com/embed/SUKHBV514Yc?si=wzZMLdXAYdxPEQv4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                        <article className="mt-4">
                            <header>
                                <h1 className="text-2xl font-semibold text-gray-600">Here the video guide for all</h1>
                            </header>
                            <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit quae debitis officia vero fugit cum qui pariatur aperiam dolor omnis voluptates ipsam corrupti, asperiores voluptatum minus eligendi perferendis necessitatibus?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolor voluptatibus aliquid quos quis, laboriosam corrupti numquam totam sunt aperiam magnam, sapiente quae impedit commodi perferendis quia ipsam maxime quasi?   </p>
                        </article>
                    </div>


                </div>
        </section>
    </main>
  )
}
