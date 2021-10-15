import {
  FaTrophy,
  FaBell,
  FaHome,
  FaClipboardList,
  FaMusic,
  FaBookOpen,
  FaTools,
} from "react-icons/fa";
import { GiStarShuriken, GiTalk } from "react-icons/gi";

import { GoPin } from "react-icons/go";

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
  },
  {
    id: 3,
    text: "Top Tools",
    component: "toptools",
    icon: <FaTools />,
  },

  {
    id: 4,
    text: "Add Tools",
    component: "addtools",
    icon: <GiStarShuriken />,
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
  },
  {
    id: 6,
    text: "To-do List",
    component: "todolist",
    icon: <FaClipboardList />,
    type: "popular",
    description: "Manage your to-do list with complex features.",
  },
  {
    id: 7,
    text: "Spotify",
    component: "spotify",
    icon: <FaMusic />,
    type: "coming soon",
    description: "Listen and focus on Spotify music directly on the app.",
  },
  {
    id: 8,
    text: "Goals",
    component: "goals",
    icon: <FaTrophy />,
    type: "coming soon",
    description: "This tool will help you accomplish your goals!",
  },
  {
    id: 9,
    text: "Agenda",
    component: "agenda",
    icon: <FaBookOpen />,
    type: "newest",
    description: "Don't miss any events with the agenda tools.",
  },
  {
    id: 10,
    text: "Group Chat",
    component: "groupchat",
    icon: <GiTalk />,
    type: "coming soon",
    description:
      "Chat with your team or classmate and see who is online or available.",
  },
];
