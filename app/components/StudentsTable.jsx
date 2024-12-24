import React, { useState } from "react";
import useStore from '../context/store'; // Import the store to access students

const StudentsTable = () => {
  const students = useStore((state) => state.students);
  const deleteStudent = useStore((state) => state.deleteStudent);
  const updateStudent = useStore((state) => state.updateStudent);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const handleEdit = (student) => {
    setEditStudent(student);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent((prev) => ({
      ...prev,
      [name]: name === "courses" ? value.split(",").map((course) => course.trim()) : value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateStudent(editStudent.id, editStudent);
    setIsEditModalOpen(false);
    setEditStudent(null);
  };

  // Helper function to format date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-4">Student Name</th>
            <th className="text-left p-4">Cohort</th>
            <th className="text-left p-4">Courses</th>
            <th className="text-left p-4">Date Joined</th>
            <th className="text-left p-4">Last Login</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={index} className="border-t">
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.cohort}</td>
              <td className="p-4 space-x-2">
                <div className="flex flex-wrap space-x-2">
                  {student.courses.map((course, i) => (
                    <span
                      key={i}
                      className="flex items-center bg-gray-100 px-2 py-1 rounded-lg font-bold"
                    >
                      {course.includes("Science") ? (
                        <img
                          src="/Science.svg"
                          alt="Science Icon"
                          className="mr-2 w-5 h-5"
                        />
                      ) : (
                        <img
                          src="/Math.svg"
                          alt="Math Icon"
                          className="mr-2 w-5 h-5"
                        />
                      )}
                      {course}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">{formatDate(student.dateJoined)}</td>
              <td className="p-4">{formatDate(student.lastLogin)}</td>
              <td className="p-4">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${student.status ? "bg-green-500" : "bg-red-500"
                    }`}
                ></span>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Student</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editStudent.name}
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
                  value={editStudent.cohort}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Courses</label>
                <input
                  type="text"
                  name="courses"
                  value={editStudent.courses.join(", ")}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={editStudent.status}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentsTable;
