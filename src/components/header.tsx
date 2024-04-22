import AnimeLogo from "@/assets/anime_logo.svg";
import { Button } from "@/components/ui/button";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto lg:px-8 px-6">
        <div className="relative flex h-14 items-center justify-between">
          <a
            href="/"
            className="relative sm:absolute inset-y-0 left-0 flex items-center font-semibold"
          >
            <img src={AnimeLogo} className="h-20 w-20 mr-0.5 " />
            Anime News
          </a>

          <div className="hidden sm:block invisible">ProfanityAPI</div>

          <div className="hidden sm:flex items-center gap-6">
            <a className="hover:underline" href="#video-demo">
              Latest Anime
            </a>
            <a className="hover:underline" href="#api">
              Feeds
            </a>
          </div>
          <div className="">
            <Button variant="ghost">Log in</Button>
            <Button className="bg-orange-500 hover:bg-orange-700">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
