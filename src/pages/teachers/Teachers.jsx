import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTeacherModal from './add/AddTeacherModal';
import UpdateTeacherModal from './update/UpdateTeacherModal';
import './Teachers.css';

function Teachers() {

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/teachers/sort')
      .then(response => {
        setTeachers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the teachers!', error);
      });
  }, []);

  const handleAddTeacher = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTeacher(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="teachers-container">
      <div className="teachers-header">
        <h2>Вчителі</h2>
        <button className="add-teacher-button" onClick={handleAddTeacher}>Добавити вчителя</button>
      </div>
      <div className="teachers-content">
        {teachers.map(teacher => (
          <div key={teacher.id} className="teacher-card">
            <h2>{teacher.lastName + ' ' + teacher.firstName + ' ' + teacher.patronymic}</h2>
            {/* <p>Subject: {teacher.subject}</p> */}
            <button className="edit-button" onClick={() => handleEditTeacher(teacher)}>Редагувати</button>
            <button className="delete-button">Видалити</button>
          </div>
        ))}
      </div>
      <AddTeacherModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
      <UpdateTeacherModal isOpen={isEditModalOpen} onClose={handleCloseEditModal} teacher={selectedTeacher} />
    </div>
  )
}

export default Teachers;
