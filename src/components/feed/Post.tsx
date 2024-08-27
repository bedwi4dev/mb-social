import Image from "next/image";
import Comments from "./Comments";
// import CommentList from "@/components/feed/CommentList";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import { Suspense } from "react";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

const Post = ({ post }: { post: FeedPostType }) => {
   const { userId } = auth()
  return (
    <div className="flex flex-col gap-4 border-b-2 pb-3">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src={post.user.avatar || "/noAvatar.ong"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>
        {/* <Image src="/more.png" width={16} height={16} alt="" /> */}
        {userId === post.user.id && <PostInfo postId= {post.id} />}
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              alt=""
              className="rounded-md object-cover"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* ITERACTION */}
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments postId={post.id} />
      </Suspense>
    </div>
    
  );
};

export default Post;
