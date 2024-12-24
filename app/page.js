"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import StudentsTable from "./components/StudentsTable";
import useStore from './context/store';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    cohort: '',
    courses: [],
    dateJoined: '',
    lastLogin: '',
    status: false,
  });
  const [selectedAY, setSelectedAY] = useState("AY 2024-25");
  const [selectedClass, setSelectedClass] = useState("CBSE 9");

  const fetchStudents = useStore((state) => state.fetchStudents);
  const addStudent = useStore((state) => state.addStudent);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value) => {
    setNewStudent((prev) => {
      const courses = prev.courses.includes(value)
        ? prev.courses.filter((course) => course !== value)
        : [...prev.courses, value];
      return { ...prev, courses };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure status is properly parsed
    const formattedStudent = {
      ...newStudent,
      status: newStudent.status === "true" || newStudent.status === true,
    };
    await addStudent(formattedStudent);
    setIsModalOpen(false);
    setNewStudent({ name: '', cohort: '', courses: [], dateJoined: '', lastLogin: '', status: false });
  };

  return (
    <div className="flex h-screen">

      <Sidebar className="block lg:hidden" />

      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <select
                className="border px-4 py-2 rounded bg-[#E9EDF1]"
                value={selectedAY}
                onChange={(e) => setSelectedAY(e.target.value)}
              >
                <option>AY 2024-25</option>
                <option>AY 2023-24</option>
              </select>
              <select
                className="border px-4 py-2 rounded bg-[#E9EDF1]"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option>CBSE 9</option>
                <option>CBSE 10</option>
              </select>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(true)}
            >
              + Add New Student
            </button>
          </div>
          <StudentsTable />
        </main>
      </div>

      {/* Modal for adding a new student */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Cohort</label>
                <input
                  type="text"
                  name="cohort"
                  value={newStudent.cohort}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Courses</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="CBSE 9 Math"
                      checked={newStudent.courses.includes("CBSE 9 Math")}
                      onChange={() => handleCheckboxChange("CBSE 9 Math")}
                      className="mr-2"
                    />
                    CBSE 9 Math
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="CBSE 9 Science"
                      checked={newStudent.courses.includes("CBSE 9 Science")}
                      onChange={() => handleCheckboxChange("CBSE 9 Science")}
                      className="mr-2"
                    />
                    CBSE 9 Science
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Date Joined</label>
                <input
                  type="date"
                  name="dateJoined"
                  value={newStudent.dateJoined}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Last Login</label>
                <input
                  type="datetime-local"
                  name="lastLogin"
                  value={newStudent.lastLogin}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={newStudent.status}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                >
                  <option value="false">Inactive</option>
                  <option value="true">Active</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
