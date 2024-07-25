import Image from "next/image";

const FriendRequestList = () => {
  return (
    <div className="flex mx-2 items-center justify-between">
      
        <div className="left-grp flex gap-2 items-center">
          <Image
            src="/friend1.jpeg"
            width={20}
            height={20}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-bold">John Smith</span>
        </div>
        <div className="right-grp flex gap-2">
        <Image
              src="/accept.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
        <Image
              src="/reject.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
        </div>
      
    </div>
  );
};

export default FriendRequestList;

// https://images.pexels.com/photos/21293020/pexels-photo-21293020/free-photo-of-potted-plants-on-either-side-of-an-old-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1