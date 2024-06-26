import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CastleIcon from '@mui/icons-material/Castle';

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-start lg:gap-6 pr-[100px]">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold hover:underline transition-all"
            >
              {icon ? icon:null}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold hover:underline transition-all"
            >
              {/* {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })} */}
                {icon ? icon:null}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white pr-[100px]">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <Link
             to="/registrarse"
             className="flex items-center gap-1 p-1 font-bold hover:scale-125 transition-all"
          >
            <CastleIcon/>
            <Button variant="text" size="sm" color="white" fullWidth>
                Se parte de la historia
            </Button>
          </Link>
        </div>

        <button onClick={() => setOpenNav(!openNav)} className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent  lg:hidden box-border">
        {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      <Collapse
        className={`rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900 overflow-hidden ${openNav ? " block":" bg-transparent hidden"}`}
        open={openNav}
      >
        <div className="container mx-auto text-black">
          {navList}
        </div>
      </Collapse>
    </MTNavbar>
  );
}


Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
