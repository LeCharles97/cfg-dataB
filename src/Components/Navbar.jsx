import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export function Navbar() {
  const [menuActivado, setMenuActivado] = useState(false);

  function Alerta() {
    return alert("Hola");
  }

  const navBarButtons = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Services",
    },
    {
      title: "Tools",
    },
    {
      title: "Contact",
    },
  ];

  const styles = "mt-9";

  return (
    <section className="z-40 w-full fixed ">
      {/*------------------------------------- */}
      {/*NavBar Main*/}
      <nav className="backdrop-blur-sm bg-current/10  font-semibold text-cyan-300 text-lg border-b-2 border-b-white/20  flex flex-wrap justify-between px-3 md:px-12 lg:px-36 [visibility:visible] md:[visibility:visible]">
        {/*------------------------------------- */}
        {/*Logo Link*/}
        <div to="/" className="my-4 flex text-cyan-200 ">
          <img src="./cfg logo/Logo.png" className="w-16 h-16" />
          <ul className="grid grid-cols-1 my-auto ml-2 text-xs">
            <li>
              <p>Guinart's</p>
            </li>
            <li>
              <p>Databases</p>
            </li>
          </ul>
        </div>
        {/*#end Logo Link */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*NavBar Buttons*/}
        <div className="md:flex hidden md:visible gap-10 py-9 md:pb-0">
          {navBarButtons.map((e) => (
            <Link
              key={e.title}
              to={`${e.title}`}
              className={`text-center font-Dubai font-light`}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>{e.title}</button>
            </Link>
          ))}
        </div>
        {/*#end NavBar Buttons */}
        {/*------------------------------------- */}
        <div className="md:hidden my-auto mr-10">
          <button onClick={() => setMenuActivado((prev) => !prev)}>
            {menuActivado ? (
              <AiOutlineClose className=" w-8 h-8  " />
            ) : (
              <AiOutlineMenu className=" w-8 h-8  " />
            )}
          </button>
        </div>
      </nav>
      {/*#end NavBar Main */}
      {/*------------------------------------- */}

      {/*------------------------------------- */}
      {/*NavBar Secundary*/}
      <nav
        className={`font-semibold text-cyan-300 text-lg px-3 w-32 mt-4 float-right  md:[visibility:hidden] ${
          menuActivado ? "[visibility:visible]" : "[visibility:hidden] text-xs mt-0"
        }`} 
        draggable={false}
      >
        {/*------------------------------------- */}
        {/*NavBar Buttons*/}
        <div className={`backdrop-blur-sm bg-current/10 rounded-lg  gap-10 py-9 border-2 border-white/20 px-4 flex ${menuActivado ? 'flex-col' : ''}`}>
          {navBarButtons.map((e) => (
            <Link
              key={e.title}
              to={`${e.title}`}
              className={`text-center`}
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              onClick={() => setMenuActivado((prev) => !prev)}
            >
              <button>{e.title}</button>
            </Link>
          ))}
        </div>
        {/*#end NavBar Buttons */}
        {/*------------------------------------- */}
      </nav>
      {/*#end NavBar Secundary */}
      {/*------------------------------------- */}
    </section>
  );
}
