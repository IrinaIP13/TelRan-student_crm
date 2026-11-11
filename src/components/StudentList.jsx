import StudentCard from "./StudentCard.jsx";
import {Fragment} from "react";

function StudentList({students}) {
    return (
        <>
        <h2>Наши студенты</h2>
        <p>Всего студентов: {students.length}</p>

            {students.length === 0 ? (
            <p>Список студентов пуст</p>
            ) : (
            <div className="students-list">
                {students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
                )}
        </>
    );
}

export default StudentList;