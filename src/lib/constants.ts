import { IMenu, ISocial } from "@/@types";
import { Transition } from "framer-motion";
import { Archivo, Heebo, Inter } from "next/font/google";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";

export const archivo = Archivo({ subsets: ["latin"] });
export const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const MENU: IMenu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const SOCIAL_LIST: ISocial[] = [
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/zulfianf.reza",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/zulfianfreza/",
    isPinned: true,
  },
  {
    name: "Github",
    icon: SiGithub,
    url: "https://github.com/zulfianfreza",
    isPinned: true,
  },
  {
    name: "Linkedin",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/zulfian-fachru-reza/",
    isPinned: true,
  },
  {
    name: "Telegram",
    icon: SiTelegram,
    url: "https://t.me/zulfianfreza",
  },
];

export const transition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 50,
  restDelta: 0.001,
};
