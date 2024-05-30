import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClassSelection.css';

const classes = [
  { class: 'Перший клас', sections: ['1-A', '1-B'] },
  { class: 'Другий клас', sections: ['2-A', '2-B'] },
  { class: 'Третій клас', sections: ['3-A', '3-B'] },
  { class: 'Четвертий клас', sections: ['4-A', '4-B'] },
  { class: 'П\'ятий клас', sections: ['5-A', '5-B'] },
  { class: 'Шостий клас', sections: ['6-A', '6-B'] },
  { class: 'Сьомий клас', sections: ['7-A', '7-B'] },
  { class: 'Восьмий клас', sections: ['8-A', '8-B'] },
  { class: 'Дев\'ятий клас', sections: ['9-A', '9-B'] },
  { class: 'Десятий клас', sections: ['10-A', '10-B'] },
  { class: 'Одинадцятий клас', sections: ['11-A', '11-B'] },
  { class: 'Дванадцятий клас', sections: ['12-A', '12-B'] },
];

function ClassSelection() {
  const [expandedClass, setExpandedClass] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setExpandedClass(expandedClass === index ? null : index);
  };

  const handleClassClick = (classItem) => {
    navigate(`/students/${classItem}`);
  };

  return (
    <div className="class-selection-container">
      <h1>Виберіть Клас</h1>
      <div className="class-list">
        {classes.map((classItem, index) => (
          <div key={index} className="class-item">
            <button className="class-button" onClick={() => handleToggle(index)}>
              {classItem.class}
            </button>
            {expandedClass === index && (
              <div className="sections">
                {classItem.sections.map((section, secIndex) => (
                  <div
                    key={secIndex}
                    className="section-item"
                    onClick={() => handleClassClick(`${index + 1}-${section.split('-')[1]}`)}>
                      {section}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassSelection;
