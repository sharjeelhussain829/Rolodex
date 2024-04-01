import { IoHeartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";


const list = [
  {
    title: "My Rolodex",
    icon: <IoHeartOutline className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/rolodexblue.svg",
  },
  {
    title: "Personal Info",
    icon: <FiUser className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/userblue.svg",
  },
  {
    title: "Password & Security",
    icon: <MdLockOutline className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/Securityblue.svg",
  },
  {
    title: "My Listings",
    icon: <PiListBold className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/Listingsblue.svg",
  },

  {
    title: "Reviews",
    icon:<FaRegStar className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/Reviewsblue.svg",
  },
  {
    title: "Notification Preferences",
    icon: <IoMdNotificationsOutline className="text-[#00000096] text-[20px]"/>,
    activeIcon: "/icons/Notificationblue.svg",
  },
  //   {
  //     title: "Help",
  //     icon: "/icons/sidebaricon.svg",
  //   },
  {
    title: "Log Out",
    icon: <IoLogOutOutline  className="text-[#00000096] text-[20px]"/>,
  },
];
export default list;
