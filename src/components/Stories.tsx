import Image from "next/image"
const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
        <div className='flex gap-8 w-max'>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="/story1.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                <span className="font-medium"> Ricky </span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="/story1.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                <span className="font-medium"> Ricky </span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="/story1.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                <span className="font-medium"> Ricky </span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="/story1.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                <span className="font-medium"> Ricky </span>
            </div>
           
        </div>
    </div>
  )
}

export default Stories

// https://images.pexels.com/photos/18874826/pexels-photo-18874826/free-photo-of-fairmont-le-chateau-frontenac-a-quebec-depuis-la-terrasse-duffrin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2