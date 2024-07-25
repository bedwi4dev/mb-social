import Image from "next/image";
import Comments from "./Comments";
import CommentList from "@/components/feed/CommentList";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src="/friend1.jpeg"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span>John Smith</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/comment3.jpeg
            "
            fill
            alt=""
            className="rounded-md object-cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          deleniti hic, velit doloribus similique quae ex pariatur? Error
          perspiciatis quis repudiandae dolor culpa, explicabo, asperiores
          voluptatibus ad incidunt iste consequatur.
        </p>
      </div>
      {/* ITERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              123 <span className="hidden md:inline"> Likes</span>{" "}
            </span>
            
          </div>
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              456 <span className="hidden md:inline"> Comments</span>{" "}
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              789 <span className="hidden md:inline"> Shares</span>{" "}
            </span>
          </div>
        </div>
      </div>

      <Comments />
      {/* <CommentList />
      <CommentList />
      <CommentList /> */}
      <div className="h-1 w-full bg-red-100"></div>
    </div>
  );
};

export default Post;
