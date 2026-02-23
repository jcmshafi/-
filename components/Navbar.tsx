import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between rounded-3xl lg:rounded-[24px] bg-muted lg:p-8 p-4 mt-8">
      {/* LEFT */}
      <div className="flex items-center gap-10">
        {/* Mobile menu */}
        <Image
          className="h-5 w-5 lg:hidden"
          src="/Menu.png"
          height={5}
          width={5}
          alt="dropdown menu"
        />

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-nav">
            New Drops 🔥
          </a>
          <a href="#" className="text-nav">
            Men ⏷
          </a>
          <a href="#" className="text-nav">
            Women ⏷
          </a>
        </nav>
      </div>

      {/* LOGO */}
      <Image
        src="/Logo.png"
        alt="Logo"
        height={32}
        width={128}
        className="h-5 lg:h-8 w-20 lg:w-32 "
      />

      {/* RIGHT */}
      <div className="flex items-center gap-2.25 lg:gap-10">
        <div className="hidden sm:block px-17 "></div>
        <Image
          className=" hidden sm:block h-5 w-5 "
          src="/Search.png"
          alt="Search"
          height={5}
          width={5}
        />
        <Image
          className="h-5 w-5"
          src="/User.png"
          alt="User"
          height={5}
          width={5}
        />

        <Image
          className="h-5 w-5"
          src="/Cart.png"
          alt="cart"
          height={5}
          width={5}
        />
      </div>
    </div>
  );
}
