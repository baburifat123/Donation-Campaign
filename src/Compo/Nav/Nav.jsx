import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const links = [
    {
      path: '/',
      name: "Home"
    },
    {
      path: '/Donation',
      name: 'Donation'
    },
    {
      path: '/Statistics',
      name: 'Statistics'
    }
  ];

  const [click, setClick] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); 

  const handleToggle = () => {
    setClick(!click);
  };

  const Close = () => {
    setClick(false);
  };

  const color = (current) => {
    if (location.pathname === current) {
      return "#FF444A";
    }
    return ""; 
  };

  return (
    <>
      <div className="mt-[53px] flex items-center justify-between max-w-[1500px] m-auto bg-[#FFFFFFF2]">
        <div className="flex items-center gap-2">
          <img src="../image/Group.png" alt="" />
          <div>
            <h1 className="text-4xl font-bold">Donation</h1>
            <h1 className="text-lg font-medium tracking-[10px] text-[#0B0B0BB2]">Campaign</h1>
          </div>
        </div>

        <div id="navs" className="flex gap-4 hidden md:flex">
          {links.map((nav, index) => (
            <div key={index} className="">
              <Link style={{ color: color(nav.path),  }} className="text-xl font-bold" to={nav.path}>
                {nav.name}
              </Link>
            </div>
          ))}
        </div>

        <div onClick={handleToggle} className="sm:hidden" aria-label="Toggle Menu">
          {click ? (
            <FaTimes className="text-2xl" onClick={Close} />
          ) : (
            <CiMenuBurger className="text-2xl" />
          )}
        </div>

        {click && (
          <div className="flex gap-2 justify-center text-2xl font-bold items-center absolute top-32 right-0 w-full " ref={navRef}>
            {links.map((nav, index) => (
              <Link key={index} to={nav.path} className="py-2">
                <h1 className="text-red-500">{nav.name}</h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
