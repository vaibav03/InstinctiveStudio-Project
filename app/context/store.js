import { create } from 'zustand';

const useStore = create((set) => ({
  students: [],
  fetchStudents: async () => {
    const res = await fetch('api/students', { method: 'GET' });
    const data = await res.json();
    set({ students: data });
  },
  addStudent: async (student) => {
    const res = await fetch('api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    const newStudent = await res.json();
    set((state) => ({ students: [...state.students, newStudent] }));
  },
  updateStudent: async (id, updatedData) => {
    const res = await fetch('api/students', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updatedData }),
    });
    const updatedStudent = await res.json();
    set((state) => ({
      students: state.students.map((student) =>
        student.id === id ? updatedStudent : student
      ),
    }));
  },
  deleteStudent: async (id) => {
    await fetch('api/students', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    }));
  },
}));

export default useStore;
