"use client";

import  {acceptFollowRequest, declineFollowRequest} from "@/lib/actions"
import Image from "next/image";
import { FollowRequest, User } from "@prisma/client";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState,setRequestState] = useState(requests);

  const accept = async (requestId:number, userId:string) => {
    removeOptimisticRequest(requestId)
    try {
      await acceptFollowRequest(userId)
      setRequestState((prev) =>
        prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };
  const decline = async (requestId:number, userId:string) => {
    removeOptimisticRequest(requestId)
    try {
      await declineFollowRequest(userId)
      setRequestState((prev) =>
        prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,(state,value:number)=>state.filter((req)=>req.id !== value))
  return (
    <div className="">
      {optimisticRequests.map((request) => (
        <div
          className="flex mx-2 items-center justify-between"
          key={request.id}
        >
          <div className="left-grp flex gap-2 items-center">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              width={20}
              height={20}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-semibold">{request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}</span>
          </div>
          <div className="right-grp flex gap-2">
            <form action={()=> accept(request.id, request.sender.id)}>
              <button>
                <Image
              src="/accept.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;

// https://images.pexels.com/photos/21293020/pexels-photo-21293020/free-photo-of-potted-plants-on-either-side-of-an-old-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
