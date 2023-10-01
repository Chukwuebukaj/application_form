import { ReactNode } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import NotePad from "../NotePad";
import { Link } from "react-router-dom";

export const sideBarIcons: ReactNode[] = [
  <AiOutlineMenu />,
  <Link to="/">
    <HiOutlineHome />
  </Link>,
  <Link to="application">
    <NotePad />
  </Link>,
];
