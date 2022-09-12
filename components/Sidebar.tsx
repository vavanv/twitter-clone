import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img className="m-3 h-10 w-10" src="https://links.papareact.com/drq" alt=""></img>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explorer" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sing Out' : 'Sing In'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
