import { NavLink } from "react-router-dom";

type ILink = {
  destination: string;
  linkText: string;
};

export const LinkComp = ({ destination, linkText }: ILink) => {
  return (
    <NavLink to={destination} className="px-2 text-base hover:no-underline">
      {linkText}
    </NavLink>
  );
};
