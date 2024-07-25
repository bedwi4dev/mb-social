import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);
    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);
    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className=" bg-white w-full shadow-md rounded-lg py-4 gap-2">
      {/* FriendRequests */}
      {/* Header */}
      <div className="flex items-center justify-between mx-2 text-sm ">
        <span className="text-gray-500"> User Information </span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer">
          See all
        </Link>
      </div>
      <div className="userInfo flex flex-col mx-2 mt-2 gap-3 ">
        {/* NAME */}
        <div className="flex-col items-center gap-2">
          <span className="font-bold ">
            {" "}
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}{" "}
          </span>
          <span className="text-sm"> @{user.username} </span>
        </div>
        {user.description && <p>{user.description}</p>}

        {/* DETAILS */}

        {/* LIVING */}
        {user.city && (
          <div className="flex gap-2 items-center">
            <Image src="/map.png" alt="" width={12} height={12} />
            <span className="text-gray-500"> Living in </span>
            <span className="text-gray-700 font-semibold"> {user.city} </span>
          </div>
        )}
        {/* SCHOOL  */}
        {user.school && (
          <div className="flex gap-2 items-center">
            <Image src="/school.png" alt="" width={12} height={12} />

            <span className="text-gray-500"> Went to </span>
            <span className="text-gray-700 font-semibold">{user.school}</span>
          </div>
        )}
        {/* WORK  */}
        {user.work && (
          <div className="flex gap-2 items-center">
            <Image src="/work.png" alt="" width={12} height={12} />
            <span className="text-gray-500"> Works at </span>
            <span className="text-gray-700 font-semibold"> {user.work} </span>
          </div>
        )}
        {/* LINK  */}
        <div className="flex gap-2 text-sm items-center justify-between">
          <div className="flex gap-2 text-sm items-center">
            <Image src="/link.png" alt="" width={12} height={12} />
            <Link href={user.website} className="text-blue-500 font-medium">
              {user.website}
            </Link>
          </div>
          <div className="flex gap-2 text-sm items-center">
            <Image src="/addevent.png" alt="" width={12} height={12} />
            <span className="text-gray-500"> Joined {formattedDate}</span>
          </div>
        </div>
        
        {currentUserId && currentUserId !== user.id && (
          <UserInfoCardInteraction
            userId={user.id}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
