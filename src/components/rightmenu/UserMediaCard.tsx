import Link from "next/link";
import Image from "next/image";
import {User} from "@prisma/client"

const UserMediaCard = ({ user }: { user?: User }) => {
  return (
    <div className=" bg-white w-full shadow-md rounded-lg ">
      {/* FriendRequests */}
      {/* Header */}
      <div className="flex items-center justify-between mx-2 text-sm p-2">
        <span className="text-gray-500 "> User Media </span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer">
          See all
        </Link>
      </div>
      <div className="flex gap-1 justify-between flex-wrap p-2">
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
           src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            src="/media.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
