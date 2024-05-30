import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AddTeacherModal.css';

const AddTeacherModal = ({ isOpen, onClose }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleAddTeacher = () => {
    const newTeacher = {
      lastName,
      firstName,
      patronymic,
      dateOfBirth,
      address,
      phoneNumber,
      email
    };

      axios.post('http://localhost:8080/api/teachers', newTeacher)
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
        contentLabel="Add Teacher Modal"
        className="add-form"
        overlayClassName="custom-overlay"
      >
        <h2>Реєстрація вчителя</h2>
        <label>
          Прізвище:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          І'мя:
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
        <button onClick={handleAddTeacher}>Добавити вчителя</button>
        <button onClick={onClose}>Скасувати</button>
      </Modal>
    );

}

export default AddTeacherModal;
