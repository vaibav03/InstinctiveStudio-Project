import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const students = await prisma.student.findMany();
    return new Response(JSON.stringify(students), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching students' }), { status: 500 });
  }
}

export async function POST(request) {
  const { name, cohort, courses, dateJoined, lastLogin, status } = await request.json();
  try {
    const newStudent = await prisma.student.create({
      data: {
        name,
        cohort,
        courses,
        dateJoined: new Date(dateJoined),
        lastLogin: new Date(lastLogin),
        status,
      },
    });
    return new Response(JSON.stringify(newStudent), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error adding student' }), { status: 500 });
  }
}

export async function PUT(request) {
  const { id, name, cohort, courses, dateJoined, lastLogin, status } = await request.json();
  try {
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        name,
        cohort,
        courses,
        dateJoined: new Date(dateJoined),
        lastLogin: new Date(lastLogin),
        status,
      },
    });
    return new Response(JSON.stringify(updatedStudent), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating student' }), { status: 500 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  try {
    await prisma.student.delete({
      where: { id },
    });
    return new Response(JSON.stringify({ message: 'Student deleted' }), { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error deleting student' }), { status: 500 });
  }
}
