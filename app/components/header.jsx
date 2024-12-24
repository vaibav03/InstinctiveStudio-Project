"use client";

import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="flex items-center flex-grow space-x-4 mr-4">
        <input
          type="text"
          placeholder="Search your course"
          className="border px-4 py-2 rounded w-full"
        />
      </div>

      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <MessageIcon />
        </button>
        <button>
          <NotificationsActiveIcon />
        </button>
        <button className="hidden md:block">
          <img src="/Settings.svg" alt="Settings" className="w-6 h-6" />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="/User pic.svg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden sm:inline">Adeline H. Dancy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
