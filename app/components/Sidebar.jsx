import React from "react";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white text-black h-screen flex flex-col fixed left-0 top-0 md:relative md:block hidden">
      <div className="p-6">
        <Image src="/quyl.png" alt="Logo" width={120} height={40} />
      </div>

      <nav className="flex-1 p-4 space-y-4">
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Dashboard.svg" alt="Dashboard" width={24} height={24} className="mr-2" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Students.svg" alt="Students" width={24} height={24} className="mr-2" />
          Students
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Chapter.svg" alt="Chapter" width={24} height={24} className="mr-2" />
          Chapter
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Help.svg" alt="Help" width={24} height={24} className="mr-2" />
          Help
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Reports.svg" alt="Reports" width={24} height={24} className="mr-2" />
          Reports
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <Image src="/Settings_sidebar.svg" alt="Settings" width={24} height={24} className="mr-2" />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
