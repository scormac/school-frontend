import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddSubjectModal from './add/AddSubjectModal';
import './Subjects.css';

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/subjects')
      .then(response => {
        setSubjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the subjects!', error);
      });
  }, []);

  const handleAddSubject = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="subjects-container">
      <div className="subjects-header">
        <h2>Предмети</h2>
        <button className="add-subject-button" onClick={handleAddSubject}>Добавити предмет</button>
      </div>
      <div className="subjects-content">
        {subjects.map(subject => (
          <div key={subject.id} className="subject-card">
            <h2>{subject.name}</h2>
            <p>Класи: {subject.classes.join(', ')}</p>
          </div>
        ))}
      </div>
      <AddSubjectModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
    </div>
  )
}

export default Subjects;
