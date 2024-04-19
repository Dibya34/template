import AnimeLogo from "@/assets/anime_logo.svg";
import { Button } from "@/components/ui/button";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="bg-red-200 flex justify-between">
      <section className="">
        <img className="w-20 h-30" src={AnimeLogo} alt="main_logo" />
      </section>
      <section className="flex justify-center items-center">
        <ul className="list-none flex">
          <li className="text-blue-500 mr-2">Home</li>
          <li className="text-blue-500 mr-2">Latest Anime</li>
          <li className="text-blue-500 mr-2">Current Feeds</li>
        </ul>
      </section>
      <section className="flex justify-center items-center">
        <Button>Hello</Button>
        <Button>Hello</Button>
      </section>
    </header>
  );
}
