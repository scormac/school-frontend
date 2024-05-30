import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AddSubjectModal.css';

const AddSubjectModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedClasses, setSelectedClasses] = useState(['']);
  const allClasses = ['1 клас', '2 клас', '3 клас', '4 клас', '5 клас', '6 клас', '7 клас', '8 клас', '9 клас', 
  '10 клас', '11 клас', '12 клас',]; 

  const handleAddClass = () => {
    setSelectedClasses([...selectedClasses, '']);
  };

  const handleClassChange = (index, value) => {
    const newSelectedClasses = [...selectedClasses];
    newSelectedClasses[index] = value;
    setSelectedClasses(newSelectedClasses);
  };

  const handleRemoveClass = (index) => {
    const newSelectedClasses = [...selectedClasses];
    newSelectedClasses.splice(index, 1);
    setSelectedClasses(newSelectedClasses);
  };

  const handleAddSubject = () => {
    const newSubject = {
      subjectName: name,
      classNames: selectedClasses.filter(c => c) // Видалити пусті значення
    };

    axios.post('http://localhost:8080/api/subjects/create', newSubject)
      .then(response => {
        console.log(response.data);
        onClose();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Subject Modal"
      className="add-form"
      overlayClassName="custom-overlay"
    >
      <h2>Додати предмет</h2>
      <label>
        Назва:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Класи:</label>
      {selectedClasses.map((selectedClass, index) => (
        <div key={index} className="class-selection">
          <select
            value={selectedClass}
            onChange={(e) => handleClassChange(index, e.target.value)}
          >
            <option value="">Виберіть клас</option>
            {allClasses.map((cls, i) => (
              <option key={i} value={cls}>{cls}</option>
            ))}
          </select>
          {index > 0 && (
            <button onClick={() => handleRemoveClass(index)} className="remove-class-button">-</button>
          )}
        </div>
      ))}
      <button onClick={handleAddClass} className="add-class-button">+</button>
      <button onClick={handleAddSubject} className="submit-button">Додати предмет</button>
      <button onClick={onClose} className="close-button">Закрити</button>
    </Modal>
  );
}

export default AddSubjectModal;
