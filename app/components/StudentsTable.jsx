"use client";

import React from "react";

const students = [
  {
    name: "Anshuman Kashyap",
    cohort: "AY 2024-25",
    courses: ["CBSE 9 Science", "CBSE 9 Math"],
    dateJoined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: true,
  },
  {
    name: "Bansi Dadhaniya",
    cohort: "AY 2024-25",
    courses: ["CBSE 9 Science", "CBSE 9 Math"],
    dateJoined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: false,
  },
];

const StudentsTable = () => {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-gray-200">
        <tr>
          <th className="text-left p-4">Student Name</th>
          <th className="text-left p-4">Cohort</th>
          <th className="text-left p-4">Courses</th>
          <th className="text-left p-4">Date Joined</th>
          <th className="text-left p-4">Last Login</th>
          <th className="text-left p-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">{student.name}</td>
            <td className="p-4">{student.cohort}</td>
            <td className="p-4 space-x-2">
              <div className="flex flex-row space-x-2">
                {student.courses.map((course, i) => (
                  <span
                    key={i}
                    className="flex items-center bg-gray-100 px-2 py-1 rounded-lg text-bold "
                  >
                    {(course === "CBSE 9 Science") ?
                      <img src="/Science.svg" alt="Science" className="mr-2" /> :
                      <img src="/Math.svg" alt="Math" className="mr-2" />
                    }
                    {course}
                  </span>
                ))}
              </div>
            </td>
            <td className="p-4">{student.dateJoined}</td>
            <td className="p-4">{student.lastLogin}</td>
            <td className="p-4">
              <span
                className={`inline-block w-4 h-4 rounded-full ${student.status ? "bg-green-500" : "bg-red-500"
                  }`}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
