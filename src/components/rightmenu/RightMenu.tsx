import Birthdays from "./Birthdays";
import FriendRequests from "../rightmenu/FriendRequests";
import UserInfoCard from "../rightmenu/UserInfoCard";
import UserMediaCard from "../rightmenu/UserMediaCard";
import Ad from "@/components/Ad";
import { User } from "@prisma/client";
import { Suspense } from "react";
// const RightMenu = ({userId}: {userId?: string}) => {
const RightMenu = ({ user }: { user?: User }) => {
  // console.log("user  data in RightMenu comp :" , user )
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
