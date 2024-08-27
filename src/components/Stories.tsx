import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import StoryList from "./StoryList";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
            userId: currentUserId,
        },
      ],
    },
    include: {
        user: true,
      },   
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORIES */}
        <StoryList stories={stories} userId={currentUserId} />
        
        
      </div>
    </div>
  );
};

export default Stories;

// https://images.pexels.com/photos/18874826/pexels-photo-18874826/free-photo-of-fairmont-le-chateau-frontenac-a-quebec-depuis-la-terrasse-duffrin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2
