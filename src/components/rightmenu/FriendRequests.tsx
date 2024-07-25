import FriendRequestList from "./FriendRequestList"
import Link from "next/link"
const FriendRequests = () => {
  return (

    <div className=' bg-white w-full shadow-md rounded-lg py-4'>
        {/* FriendRequests */}
        {/* Header */}
        <div className='flex items-center justify-between mx-2 text-sm'>
            <span className='text-gray-500'> Friend Requests </span>
            <Link href="/" className='text-blue-500 text-xs cursor-pointer'> See all </Link>

        </div>
        {/* FR List */}
        <div className='flex flex-col gap-2 px-2 mt-4'>
            <FriendRequestList />
            <FriendRequestList />
            
        </div>
    </div>
  )
}

export default FriendRequests