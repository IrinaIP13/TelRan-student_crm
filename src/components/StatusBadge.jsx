
function StatusBadge({status}) {
    return (
        <span className={`student-card-status ${status ? 'active' : 'paused'}`}>
        {status ? 'Активен' : 'Пауза'}
        </span>
    );
}

export default StatusBadge;