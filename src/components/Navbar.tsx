import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className='md:hidden lg:block w-[20%]"'>
        <Link href="/" className="font-bold text-xl text-blue-600 ">
          MB-SOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm"></div>
        {/* LINKS */}
        <div className="flex gap-2 text-gray-600">
            <Link href="/" className="flex gap-2">
            <image src="/home.png" alt="HomePage" width={16} height={16} className="w-4 h-4"/>
            <span>Homepage</span>
            </Link>
            <Link href="/friends" className="flex gap-2">
            <image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4"/>
            <span>Friends</span>
            </Link>
            <Link href="/" className="flex gap-2">
            <image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4"/>
            <span>Stories</span>
            </Link>

        </div>
      <div className="hidden md:block w-[20%]"></div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
