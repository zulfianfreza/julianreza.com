import { IconType } from "react-icons";

export interface IMenu {
  title: string;
  path: string;
}

export interface IProject {
  title: string;
  slug: string;
  image?: string;
  summary: string;
  repo: string;
  demo: string;
  finish: boolean;
  content: string;
  isPinned?: boolean;
  isMockup?: boolean;
  stack: string[];
  isShow?: false;
}

export interface ISocial {
  name: string;
  url: string;
  icon: IconType;
  isPinned?: boolean;
}

export interface IPost {
  title: string;
  slug: string;
  summary: string;
  date: Date;
  content: string;
  isPinned?: boolean;
  thumbnail: string;
}
