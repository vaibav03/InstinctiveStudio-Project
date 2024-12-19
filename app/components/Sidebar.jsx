"use client";

import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white text-white h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Quyl.</h2>
      </div>

      <nav className="flex-1 p-4 space-y-4">
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/dashboard.svg" alt="Dashboard" className="mr-2" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/students.svg" alt="Students" className="mr-2" />
          Students
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/chapter.svg" alt="Chapter" className="mr-2" />
          Chapter
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/help.svg" alt="Help" className="mr-2" />
          Help
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/reports.svg" alt="Reports" className="mr-2" />
          Reports
        </a>
        <a
          href="#"
          className="flex items-center p-2 rounded text-[#6F767E] hover:bg-[#EEEEEE]"
        >
          <img src="/settings_sidebar.svg" alt="Settings" className="mr-2" />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
