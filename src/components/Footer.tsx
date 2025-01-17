import ListItems from "./ListItems";
import Logo from "./Logo";
import SectionHeading from "./SectionHeading";
import TagLine from "./TagLine";

export default function Footer() {
  return (
    <footer className="bg-blue-100 pt-10 pb-8 ">
        <div className="container flex flex-col gap-y-8">
            <div className="flex">
              <div className="mr-auto max-w-80">
                  <Logo/>
                  <TagLine >
                  Unlock your hidden coding potential with new themes, colors and highlights.
                  </TagLine>
              </div>
            
        

        <div className="flex gap-x-16">
            
            <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-semibold">Library</h4>
            <ListItems>Contact</ListItems>
            <ListItems>Themes</ListItems>
            <ListItems>India</ListItems>
            </div>
            <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-semibold">Popular</h4>
            <ListItems>Live Chat</ListItems>
            <ListItems>Songs</ListItems>
            <ListItems>About</ListItems>
            </div>

            <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-semibold">Social</h4>
            <ListItems>Youtube</ListItems>
            <ListItems>Twitter</ListItems>
            <ListItems>Twitch</ListItems>
            </div>
            
            
        </div>
        </div>

        <div className="border-t border-blue-200 pt-8 text-center text-sm text-blue-800">
        &copy; 2025 Cody. All rights reserved.
      </div>

        </div>
    </footer>
  )
}
