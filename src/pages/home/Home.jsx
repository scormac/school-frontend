import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
        
        <div className="home-container">
      <header className="home-header">
        <h1>School Management System</h1>
        <p>Efficiently manage teachers, students, subjects, and grades.</p>
      </header>
      <div className="home-links">
        <a href="/teachers" className="home-link">
          <div className="home-link-icon">👩‍🏫</div>
          <div className="home-link-text">Manage Teachers</div>
        </a>
        <a href="/students" className="home-link">
          <div className="home-link-icon">👨‍🎓</div>
          <div className="home-link-text">Manage Students</div>
        </a>
        <a href="/subjects" className="home-link">
          <div className="home-link-icon">📚</div>
          <div className="home-link-text">Manage Subjects</div>
        </a>
        <a href="/grades" className="home-link">
          <div className="home-link-icon">📝</div>
          <div className="home-link-text">Manage Grades</div>
        </a>
      </div>
    </div>

    </div>
  )
}

export default Home