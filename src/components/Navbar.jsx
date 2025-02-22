import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logoCute, menu, close} from '../assets'

const Navbar = () => {
  const [linkActive, setLinkActive] = useState(""); // to direct link
  const [toggle, setToggle] = useState(false); // to activate the hidden menu
  const [scrollOpacity, setScrollOpacity] = useState(0); // to increase opacity as scrolling down

  // Calculate opacity based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / 500, 1); 
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20`}
      style={{
        backgroundColor: `rgba(96, 135, 163, ${scrollOpacity})`
      }}>
      <div className="w-full flex 
        justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
          setLinkActive("");
          window.scrollTo(0,0);
        }}>

          {/* Logo and name */}
          <img src={logoCute} alt="logoCute" 
          className="w-9 h-9"/>
          <p className="text-white text-[24px] cursor-pointer flex font-arapey-bold">
            Richard Adhika &nbsp;
            <span className="block sm:inline-block font-arapey-bold">| UBC</span>
          </p>
          
        </Link>

        {/* NavBar right side */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              linkActive === link.title
                ? "text-gray-300"
                : "text-white"
            } hover:text-gray-300 text-[18px] cursor-point mt-[4px]`}
            onClick={() => setLinkActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* menu button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Toggle hidden menu */}
        <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 
          right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${
                  linkActive === link.title
                    ? "text-white"
                    : "text-white"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setLinkActive(link.title);
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>

      
    </nav>
  )
}

export default Navbar;