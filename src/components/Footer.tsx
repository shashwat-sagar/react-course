import { AiOutlineHome } from "react-icons/ai";
import { IoMdContact, IoMdPersonAdd } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type NavItem = {
  title: string;
  link: string;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { title: "Home", link: "/", icon: <AiOutlineHome /> },
  { title: "Registration", link: "/registration", icon: <IoMdPersonAdd /> },
  { title: "Login", link: "/login", icon: <IoMdContact /> },
  { title: "About", link: "/about", icon: <IoInformationCircleOutline /> },
  { title: "Contact", link: "/contact", icon: <IoMdContact /> },
];



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo / Brand */}
        <div className="text-xl font-semibold">
          MyApp
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              {/* Icon */}
              <span>{item.icon}</span>

              {/* Title */}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;