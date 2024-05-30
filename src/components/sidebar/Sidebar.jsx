import React, { useState } from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { ImBooks } from "react-icons/im";
import { PiNotebookFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";


function Sidebar() {
    
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleSidebar = () => {
      setIsExpanded(!isExpanded);
    };
  
    const menuItems = [
      { name: 'Головна', icon: <FaHome />, link: '/' },
      { name: 'Вчителі', icon: <FaChalkboardTeacher />, link: '/teachers' },
      { name: 'Учні', icon: <FaChildren />, link: '/students' },
      { name: 'Предмети', icon: <ImBooks />, link: '/subjects' },
      { name: 'Журнал оцінок', icon: <PiNotebookFill />, link: '/grades' }
    ];

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? <MdKeyboardDoubleArrowLeft/> : <MdKeyboardDoubleArrowRight/>}
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.link} className="menu-link">
              <span className="icon">{item.icon}</span>
              {isExpanded && <span className="text">{item.name}</span>}
              {!isExpanded && <span className="tooltip">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Sidebar