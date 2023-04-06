import { ComponentProps, FC } from "react";

export interface FooterProps extends ComponentProps<"footer"> {};

export const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <footer className="bg-[#FFFF00] py-[35px] text-center font-normal text-[20px] leading-[30px] tracking-[-0.015em] text-[#00000080]/50">
      © Maxima Post Production Studio
    </footer>
  )
};