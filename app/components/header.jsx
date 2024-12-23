"use client";

import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative flex items-center flex-grow space-x-4 mr-4 mt-2">
        <input
          type="text"
          placeholder="Search your course"
          className="px-6 py-3 pl-12 rounded-xl w-full text-black"
        />
        <img
          src="/search.png"
          alt="Search Icon"
          className="absolute left-1 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-200"
        />
      </div>

      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-8 mt-1">
        <button>
          <img src="/Help.svg" alt="Help" className="ml-16" />
        </button>
        <button className="p-2">
          <MessageIcon sx={{ color: "#6F767E", width: 24, height: 24 }} />
        </button>
        <button>
          <img src="/Settings.svg" alt="Settings" />
        </button>
        <button>
          <NotificationsActiveIcon sx={{ color: "#6F767E", width: 24, height: 24 }} />
        </button>
        <div className="flex items-center space-x-4">
          <img
            src="/User pic.svg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-black font-bold text-lg">Adeline H. Dancy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;