import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {students} from "./data/students.js";
import StudentList from "./components/StudentList.jsx";

function App() {
return (
    <>
    <Header/>
    <StudentList students={students} />
    <Footer/>
    </>
)
}

export default App
