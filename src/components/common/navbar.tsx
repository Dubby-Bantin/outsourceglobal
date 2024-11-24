"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 flex items-center justify-around w-full bg-white p-3 z-50">
      <Link href="/">
        <Image src={logo} alt="logo" width={150} height={150} />
      </Link>

      <div className="flex items-center gap-20 transition-all duration-700">
        {navLinks.map(({ name, path }, i) => (
          <Link
            className={`${pathName === path ? "text-blue-500" : "text-black"} `}
            key={i}
            href={path}
          >
            {name}
          </Link>
        ))}
      </div>
      <button className="bg-blue-400 p-3 px-7 rounded-sm text-white">
        Contact us
      </button>
    </div>
  );
};

export default Navbar;
