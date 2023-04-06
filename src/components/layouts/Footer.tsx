import { ComponentProps, FC } from "react";

export interface FooterProps extends ComponentProps<"footer"> {};

export const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <footer>Footer</footer>
  )
};