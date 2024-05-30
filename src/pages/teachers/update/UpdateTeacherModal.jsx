import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './UpdateTeacherModal.css';

const UpdateTeacherModal = ({ isOpen, onClose, teacher }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (teacher) {
      setLastName(teacher.lastName);
      setFirstName(teacher.firstName);
      setPatronymic(teacher.patronymic);
      setDateOfBirth(teacher.dateOfBirth);
      setAddress(teacher.address);
      setPhoneNumber(teacher.phoneNumber);
      setEmail(teacher.email);
    }
  }, [teacher]);

  const handleUpdateTeacher = () => {
    const updatedTeacher = {
      ...teacher,
      lastName,
      firstName,
      patronymic,
      dateOfBirth,
      address,
      phoneNumber,
      email
    };

    axios.put(`http://localhost:8080/api/teachers/${teacher.id}`, updatedTeacher)
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
      contentLabel="Edit Teacher Modal"
      className="edit-form"
      overlayClassName="custom-overlay"
      shouldCloseOnOverlayClick={false}
    >
      <h2>Редагування вчителя</h2>
      <label>
        Прізвище:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Ім'я:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Побатькові:
        <input
          type="text"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />
      </label>
      <label>
        Дата народження:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <label>
        Адреса:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Номер телефону:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Електронна пошта:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleUpdateTeacher}>Оновити вчителя</button>
      <button onClick={onClose}>Скасувати</button>
    </Modal>
  );
}

export default UpdateTeacherModal;
