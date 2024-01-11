import { Link, NavLink } from "react-router-dom";
import { Links as link } from "../utilities/Links";
import { useAppDispatch } from "../store";
import { toggleSide } from "../features/user/userSlice";

type LinkMap = {
  id: number;
  text: string;
  icon: JSX.Element | string;
  path: string;
};

const Links = ({ bigSide }: { bigSide?: boolean }) => {
  const dispatch = useAppDispatch();
  const linkFunc = () => {
    if (bigSide) {
      dispatch(toggleSide());
    }
  };

  return (
    <ul>
      {link.map((item: LinkMap) => {
        const { id, text, icon, path } = item;
        // console.log(e)
        return (
          <li key={id}>
            <NavLink
              to={`${path}`}
              onClick={linkFunc}
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              {icon} <span>{text}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
