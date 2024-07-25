import Image from "next/image";

const CommentList = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src="https://images.pexels.com/photos/16714964/pexels-photo-16714964/free-photo-of-550-south-tryon-skyscraper-near-bank-of-america-stadium-in-charlotte-north-carolina-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span>Mo Badawi</span>
        </div>
        <div>
          <Image src="/more.png" width={16} height={16} alt="" />
        </div>
      </div>
      <p className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque deleniti
        hic, velit doloribus similique quae ex pariatur? Error perspiciatis quis
        repudiandae dolor culpa, explicabo, asperiores voluptatibus ad incidunt
        iste consequatur.
      </p>

      <div className="flex items-center justify-between text-sm gap-8 bg-slate-100 p-2  rounded-xl ">
        <div className="flex items-center gap-4">
          <Image
            src="/like.png"
            width={12}
            height={12}
            alt=""
            className="cursor-pointer  w-4 h-4"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 text-sm">12</span>
          <span className=" ">Likes</span>
        </div>
        <div className=" text-blue-500 text-sm cursor-pointer "> Reply </div>
      </div>
    </div>
  );
};

export default CommentList;

// https://images.pexels.com/photos/26472012/pexels-photo-26472012/free-photo-of-fox-cub.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
