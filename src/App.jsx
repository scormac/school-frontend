import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Teachers from './pages/teachers/Teachers';
import StudentList from './pages/students/StudentList';
import Subjects from './pages/subjects/Subjects';
import Grades from './pages/grades/Grades';
import ClassSelection from './pages/classes/ClassSelection';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route exact path="/students" element={<ClassSelection />} />
            <Route path="/students/:className" element={<StudentList/>}/>
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
