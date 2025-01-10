import SectionHeading from "./SectionHeading"


export default function NewsLetter() {
  return (
    <section className="flex flex-col gap-y-8 py-16">
        <div className="container max-w-screen-sm">
                <SectionHeading>Stay Updated</SectionHeading>
                <p className="mt-2 text-center text-lg tex-gray-900">
                    Subscribe to our news letter for more tips.
                </p>
        </div>
        <div className="container ">
            <form action="" className="flex justify-center gap-x-2 ">
                <input type="text" placeholder="email" className="rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-800 focus:ring-1 w-96" />
                <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-blue-800 text-blue-100 hover:bg-blue-900">Subscribe</button>
            </form>
        </div>
    </section>
  )
}
