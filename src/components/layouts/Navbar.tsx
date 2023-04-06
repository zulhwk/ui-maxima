import { ComponentProps, FC } from "react";

export interface NavbarProps extends ComponentProps<"nav"> {};

export const Navbar: FC<NavbarProps> = ({ ...props }) => {
  return (
    <nav>NAVBAR</nav>
  )
};