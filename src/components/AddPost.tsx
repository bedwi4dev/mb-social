import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {
  const { userId } = auth();
  //  console.log( "Auth : ", auth())
  //  console.log( "userId : ", userId)

  // the following should be blocked or deleted later
  const testAction = async (formData: FormData) => {
    "use server";

    if (!userId) return;

    const desc = formData.get("desc") as String;
    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
        },
      });
      // console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="/comment4.jpeg"
        alt=""
        width={48}
        height={48}
        className="w-24 h-24 object-cover rounded-full"
      />

      <div className=""></div>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        {/* change action to "" and block testAction above */}
        <form action={testAction} className="flex gap-4">
          {/* <form  className="flex gap-4"> */}
          <textarea
            placeholder="What's in your mind"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* POST OPTIOS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
