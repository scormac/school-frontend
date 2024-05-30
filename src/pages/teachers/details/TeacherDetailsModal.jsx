import React from 'react';
import Modal from 'react-modal';
import './TeacherDetailsModal.css';

const TeacherDetailsModal = ({ isOpen, onClose, teacher }) => {
  if (!teacher) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Teacher Details Modal"
      className="details-modal"
      overlayClassName="custom-overlay"
      shouldCloseOnOverlayClick={false}
    >
      <h2>Інформація про вчителя</h2>
      <p><strong>Прізвище:</strong> {teacher.lastName}</p>
      <p><strong>Ім'я:</strong> {teacher.firstName}</p>
      <p><strong>Побатькові:</strong> {teacher.patronymic}</p>
      <p><strong>Дата народження:</strong> {teacher.dateOfBirth}</p>
      <p><strong>Адреса:</strong> {teacher.address}</p>
      <p><strong>Номер телефону:</strong> {teacher.phoneNumber}</p>
      <p><strong>Електронна пошта:</strong> {teacher.email}</p>
      <div className="close-button-container">
        <button className="close-button" onClick={onClose}>Закрити</button>
      </div>
    </Modal>
  );
}

export default TeacherDetailsModal;
