import StatusBadge from "./StatusBadge.jsx";

function StudentCard({student}) {
    return (
        <div className="student-card">
            <div className="student-card-header">
                <strong>{student.name}</strong>
                <StatusBadge status={student.isActive} />
            </div>

            <p>Возраст: {student.age}</p>
            <p>Группа: {student.group}</p>

            {student.age < 18 && (
                <p className="minor-warning">Несовершеннолетний студент</p>
            )}
        </div>
    );
}

export default StudentCard;