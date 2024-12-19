"use client";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentsTable from "./components/StudentsTable";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <Header />

        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <select className="border px-4 py-2 rounded bg-[#E9EDF1] ">
                <option>AY 2024-25</option>
              </select>
              <select className="border px-4 py-2 rounded bg-[#E9EDF1]">
                <option>CBSE 9</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              + Add New Student
            </button>
          </div>
          {/* Students Table */}
          <StudentsTable />
        </main>
      </div>
    </div>
  );
};

export default App;
