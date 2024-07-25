import Image from "next/image";
import CommentList from "./CommentList";

const Comments = () => {
  return (
    <div className="">
      {/* Comments */}
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="/comment2.jpeg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer "
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div className=""></div>

      {/* COMMENT  */}
      <h1 className="mt-6 underline text-center"> COMMENTS </h1>
      <CommentList />
      <CommentList />
    </div>
  );
};

export default Comments;
