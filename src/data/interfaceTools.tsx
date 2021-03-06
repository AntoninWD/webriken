import {
  FaTrophy,
  FaBell,
  FaHome,
  FaClipboardList,
  FaMusic,
  FaBookOpen,
} from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { GoPin } from "react-icons/go";
import { RiTimerFill } from "react-icons/ri";
export const mainTools = [
  {
    id: 1,
    text: "Home",
    component: "home",
    icon: <FaHome />,
    active: true,
  },
  {
    id: 2,
    text: "Notifications",
    component: "notifications",
    icon: <FaBell />,
    active: false,
  },
  {
    id: 3,
    text: "Messenger",
    component: "messenger",
    icon: <BsChatSquareDotsFill />,
    active: false,
  },

  {
    id: 4,
    text: "ADD TOOLS",
    component: "addtools",
    icon: <GiStarShuriken />,
    active: false,
  },
];

export const allTools = [
  {
    id: 5,
    text: "Post Tips",
    component: "posttips",
    icon: <GoPin />,
    type: "popular",
    description:
      "Organize your notes with post tips by subjects or importance.",
    active: false,
  },
  {
    id: 6,
    text: "To-do List",
    component: "todolist",
    icon: <FaClipboardList />,
    type: "popular",
    description: "Manage your to-do list with complex features.",
    active: false,
  },
  {
    id: 7,
    text: "Spotify",
    component: "spotify",
    icon: <FaMusic />,
    type: "coming soon",
    description: "Listen and focus on Spotify music directly on the app.",
    active: false,
  },
  {
    id: 8,
    text: "Goals",
    component: "goals",
    icon: <FaTrophy />,
    type: "coming soon",
    description: "This tool will help you accomplish your goals!",
    active: false,
  },
  {
    id: 9,
    text: "Agenda",
    component: "agenda",
    icon: <FaBookOpen />,
    type: "newest",
    description: "Don't miss any events with the agenda tools.",
    active: false,
  },
  {
    id: 10,
    text: "Pomodoro",
    component: "pomodoro",
    icon: <RiTimerFill />,
    type: "popular",
    description: "Become productive with the pomodoro timer technique!",
    active: false,
  },
];
