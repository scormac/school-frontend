import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = ({ classId }) => {
  const [students, setStudents] = useState([]);
  const [classTeacher, setClassTeacher] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`/api/classes/${classId}/students`);
        setStudents(response.data.students);
        setClassTeacher(response.data.classTeacher);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [classId]);

  return (
    <div>
      <h1>Список учнів {classId} класу</h1>
      {classTeacher && (
        <div>
          <h2>Класний керівник: {classTeacher.lastName} {classTeacher.firstName}</h2>
        </div>
      )}
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            {student.firstName} {student.lastName} - {student.dateOfBirth}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
